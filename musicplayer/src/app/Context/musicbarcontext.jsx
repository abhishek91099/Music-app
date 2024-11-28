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

  return (
    <MusicbarContext.Provider
      value={{ song_info, handleSelect, handleTogglePlay, audioRef }}
    >
      {children}
    </MusicbarContext.Provider>
  );
};
