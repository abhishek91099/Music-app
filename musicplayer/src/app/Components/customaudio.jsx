'use client'
import { useState, useRef, useEffect } from 'react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

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
    <div className=" bg-[#2a0f41] p-4 rounded-lg flex flex-row items-center  h-full">
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-40 h-2 cursor-pointer bg-yellow-500 appearance-none"
        //  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        min="0"
        max="100"
        style={{
          background: `linear-gradient(to right, yellow ${progress}%, #d1d5db ${progress}%)`,
        }}
      />
      <div className='flex flex-row '>
      {/* <button
        onClick={togglePlayPause}
        className="text-white bg-blue-600 p-2 rounded-full mb-4"
      > */}
      <SkipPreviousIcon/>
      <div className='flex flex-col cursor-pointer ' onClick={togglePlayPause}>
      {isPlaying ?<PauseIcon/> 
      
      :<PlayArrowIcon/>
       }
       </div>
      <SkipNextIcon/> 
      
        {/* {isPlaying ? 'Pause' : 'Play'}
      </button> */}
      </div>
      <audio
        ref={audioRef}
        src="/audio.mp3"
        className="hidden"
        onTimeUpdate={handleTimeUpdate}
      ></audio>

      {/* Progress Bar */}

      <style jsx>{`
        input[type='range'] {
          -webkit-appearance: none;
          margin: 10px 0;
          width:500px;
        }
        input[type='range']:focus {
          outline: none;
        }
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: yellow;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        input[type='range']::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: yellow;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        input[type='range']::-ms-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: yellow;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .group:hover input[type='range']::-webkit-slider-thumb {
          opacity: 1;
        }
        .group:hover input[type='range']::-moz-range-thumb {
          opacity: 1;
        }
        .group:hover input[type='range']::-ms-thumb {
          opacity: 1;
        }
      `}</style>
     
    </div>
  );
};

