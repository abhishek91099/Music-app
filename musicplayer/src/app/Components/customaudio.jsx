'use client'
import { useState, useRef, useEffect, useContext } from 'react';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
// import { MusicbarContext } from '../Context/musicbarcontext';
import {MusicbarContext} from '../Context/musicbarcontext';
export const CustomAudioPlayer = () => {
  const { song_info, handleSelect, handleTogglePlay, audioRef} = useContext(MusicbarContext);
  console.log(song_info,'inside musicbar')

  const formatTime = (time) => {
    if (isNaN(time)) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
return(
      <div className="bg-[#2a0f41] p-4 rounded-lg flex flex-row items-center justify-between h-full space-x-4">
      {/* Song Information */}
      <div className="flex items-center space-x-4">
        {song_info.albumArt && (
          <img 
            src={song_info.albumArt} 
            alt="Album Art" 
            className="w-16 h-16 rounded-md object-cover"
          />
        )}
        <div>
          <p className="text-white font-semibold">{song_info.title || 'No Song Selected'}</p>
          <p className="text-gray-400 text-sm">{song_info.artist || ''}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center space-y-2 flex-grow">
        <div className="flex items-center space-x-4">
          <SkipPreviousIcon className="text-white cursor-pointer" />
          <div 
            className="bg-purple-600 rounded-full p-2 cursor-pointer" 
            onClick={handleTogglePlay}
          >
            {song_info.isPlaying ? <PauseIcon className="text-white"/> : <PlayArrowIcon className="text-white"/>}
          </div>
          <SkipNextIcon className="text-white cursor-pointer" />
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2 w-full">
          <span className="text-white text-xs">
            {formatTime(audioRef.current?.currentTime || 0)}
          </span>
          <input
            type="range"
            value={song_info.progress}
            // onChange={handleSeek}
            className="w-full h-2 cursor-pointer appearance-none bg-purple-300 rounded-full"
            min="0"
            max="100"
            style={{
              background: `linear-gradient(to right, purple ${song_info.progress}%, #d1d5db ${song_info.progress}%)`,
            }}
          />
          <span className="text-white text-xs">
            {formatTime(audioRef.current?.duration || 0)}
          </span>
        </div>
      </div>

      {/* Volume Control (Placeholder) */}
      <div className="flex items-center space-x-2">
        {/* You can add volume control here in the future */}
      </div>

      <audio
        ref={audioRef}
        src={song_info.songUrl}
        className="hidden"
        // onTimeUpdate={handleTimeUpdate}
      />
    </div>
  
)
}
//   // const { setsong_info, togglePlayPause, handleSeek, song_info, audioRef } = useContext(MusicbarContext);

//   // const handleTimeUpdate = () => {
//   //   const audio = audioRef.current;
//   //   const progress = (audio.currentTime / audio.duration) * 100;
//   //   setsong_info((prev) => ({
//   //     ...prev,
//   //     progress: progress
//   //   }));
//   // };

//   // // Format time to MM:SS
//   // const formatTime = (time) => {
//   //   if (isNaN(time)) return '00:00';
//   //   const minutes = Math.floor(time / 60);
//   //   const seconds = Math.floor(time % 60);
//   //   return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   // };

//   return (
//     <div className="bg-[#2a0f41] p-4 rounded-lg flex flex-row items-center justify-between h-full space-x-4">
//       {/* Song Information */}
//       <div className="flex items-center space-x-4">
//         {song_info.albumArt && (
//           <img 
//             src={song_info.albumArt} 
//             alt="Album Art" 
//             className="w-16 h-16 rounded-md object-cover"
//           />
//         )}
//         <div>
//           <p className="text-white font-semibold">{song_info.title || 'No Song Selected'}</p>
//           <p className="text-gray-400 text-sm">{song_info.artist || ''}</p>
//         </div>
//       </div>

//       {/* Player Controls */}
//       <div className="flex flex-col items-center space-y-2 flex-grow">
//         <div className="flex items-center space-x-4">
//           <SkipPreviousIcon className="text-white cursor-pointer" />
//           <div 
//             className="bg-purple-600 rounded-full p-2 cursor-pointer" 
//             onClick={togglePlayPause}
//           >
//             {song_info.isPlaying ? <PauseIcon className="text-white"/> : <PlayArrowIcon className="text-white"/>}
//           </div>
//           <SkipNextIcon className="text-white cursor-pointer" />
//         </div>

//         {/* Progress Bar */}
//         <div className="flex items-center space-x-2 w-full">
//           <span className="text-white text-xs">
//             {formatTime(audioRef.current?.currentTime || 0)}
//           </span>
//           <input
//             type="range"
//             value={song_info.progress}
//             onChange={handleSeek}
//             className="w-full h-2 cursor-pointer appearance-none bg-purple-300 rounded-full"
//             min="0"
//             max="100"
//             style={{
//               background: `linear-gradient(to right, purple ${song_info.progress}%, #d1d5db ${song_info.progress}%)`,
//             }}
//           />
//           <span className="text-white text-xs">
//             {formatTime(audioRef.current?.duration || 0)}
//           </span>
//         </div>
//       </div>

//       {/* Volume Control (Placeholder) */}
//       <div className="flex items-center space-x-2">
//         {/* You can add volume control here in the future */}
//       </div>

//       <audio
//         ref={audioRef}
//         src={song_info.songUrl}
//         className="hidden"
//         onTimeUpdate={handleTimeUpdate}
//       />
//     </div>
//   );
// };