'use client'
import { useState, useRef, useEffect } from 'react';

export const CustomAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Track progress
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <div className="custom-audio-player bg-fuchsia-50 p-4 rounded-lg flex flex-col items-center w-80">
      <button
        onClick={togglePlayPause}
        className="text-white bg-blue-600 p-2 rounded-full mb-4"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <audio
        ref={audioRef}
        src="/audio.mp3"
        className="hidden"
        onTimeUpdate={handleTimeUpdate}
      ></audio>

      {/* Progress Bar */}
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-full h-2 cursor-pointer custom-range"
        min="0"
        max="100"
        style={{
          background: `linear-gradient(to right, yellow ${progress}%, grey ${progress}%)`,
        }}
      />

      <div className="mt-2 text-gray-700">Now Playing: Bol Do Na Zara</div>
    </div>
  );
};

