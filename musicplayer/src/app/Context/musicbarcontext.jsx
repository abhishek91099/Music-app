'use client';
import { useState, createContext, useRef } from "react";

export const MusicbarContext = createContext();

export const MusicbarProvider = ({ children }) => {
  const [song_info, setSong] = useState({
    album_art_path: "",
    audio_path: "",
    title: "",
    isplaying: false,
    artist: "",
    progress: 0,
  });

  const audioRef = useRef(null);

  // Handle song selection
  const handleSelect = (song,isplaying) => {
    // If audioRef is null (first time), create a new Audio instance
    if (!audioRef.current) {
      audioRef.current = new Audio(song.audio_path);
    } else {
      // Pause current audio before loading the new one
      audioRef.current.pause();
      audioRef.current.src = song.audio_path; // Set new audio source
    }

    // Play the selected song
    audioRef.current.play();

    // Update state with new song info
    setSong({
      title: song.title,
      artist: song.artist,
      album_art_path: song.album_art_path,
      audio_path: song.audio_path,
      isplaying: isplaying,
      progress: 0,
    });

    // Handle audio end event
    audioRef.current.onended = () => {
      setSong((prev) => ({ ...prev, isplaying: false }));
    };
  };

  // Handle play functionality
  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (song_info.isplaying) {
        // Pause the audio if it's currently playing
        audioRef.current.pause();
        setSong((prev) => ({ ...prev, isplaying: false }));
      } else {
        // Play the audio if it's currently paused
        audioRef.current.play();
        setSong((prev) => ({ ...prev, isplaying: true }));
      }
    }
  };


  
  // const handleTimeUpdate = () => {
  //   if (audioRef.current) {
  //     const currentTime = audioRef.current.currentTime; // Get the current time of the song
  //     const duration = audioRef.current.duration; // Get the duration of the song
  //     const progress = (currentTime / duration) * 100; // Calculate progress as a percentage
  
  //     // Update the progress state (could also update other states like current time)
  //     setSong((prevState) => ({
  //       ...prevState,
  //       progress,
  //     }));
  //   }
  // };
  
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const { currentTime, duration } = audioRef.current;
      if (duration > 0) {
        const progress = Math.floor((currentTime / duration) * 100);
        setSong(prev => ({
          ...prev,
          progress: isNaN(progress) ? 0 : progress
        }));
      }
    }
  };
  // // Handle when the user seeks (updates progress bar)
  // const handleSeek = (event) => {
  //   const value = event.target.value;
  //   const duration = audioRef.current.duration;
  //   const newTime = (value / 100) * duration; // Calculate the new time based on the progress bar value
  //   audioRef.current.currentTime = newTime; // Update the audio's current time
    
  //   // Update the progress in the state
  //   setSong((prevState) => ({
  //     ...prevState,
  //     progress: value, // Update progress as the user seeks
  //   }));
  // };

  const handleSeek = (event) => {
    if (audioRef.current) {
      try {
        const value = parseFloat(event.target.value);
        const duration = audioRef.current.duration;
        
        if (!isNaN(duration)) {
          const newTime = (value / 100) * duration;
          audioRef.current.currentTime = newTime;
          
          // Ensure the audio continues playing after seek
          if (song_info.isplaying) {
            audioRef.current.play().catch(error => {
              console.error('Seek play error:', error);
            });
          }
          
          setSong((prevState) => ({
            ...prevState,
            progress: value,
          }));
        }
      } catch (error) {
        console.error('Error seeking audio:', error);
      }
    }
  };
  return (
    <MusicbarContext.Provider
      value={{ song_info, handleSelect, handleTogglePlay, audioRef,handleSeek,handleTimeUpdate }}
    >
      {children}
    </MusicbarContext.Provider>
  );
};
