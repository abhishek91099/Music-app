// import React, { useContext, useState } from 'react';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import {MusicbarContext} from '../Context/musicbarcontext';

// export const Albumlist = ({ data }) => {
//   // State to manage whether the audio is playing or not
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [audio] = useState(new Audio(data.audio_path));
//   const [song_info,setSong]=useContext(MusicbarContext)  // Assume data.audio_path exists

//   // Toggle play/pause when the play icon is clicked
//   const togglePlay = () => {
    
//   setSong(data)
//     if (isPlaying) {
//       audio.pause();
//     } else {
//       audio.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className='h-full flex flex-col items-center min-w-[150px] mr-4'>
//       {/* Image container with hover effect */}
//       <div className='relative group h-full'>
//         {/* Play icon visible only on hover */}
//         <PlayArrowIcon
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             fontSize: '40px',
//             opacity: 0, // Initially hidden
//             transition: 'opacity 0.3s', // Smooth transition for visibility
//           }}
//           className="group-hover:opacity-100 cursor-pointer"
//           onClick={togglePlay} // Play on click
//         />
        
//         {/* Album art image */}
//         <img 
//           src={data.album_art_path}  
//           alt={data.title}
//           className='h-40 w-40 object-cover shadow-lg'
//         />
//       </div> 

//       {/* Title */}
//       <div className='items-center mt-2'>
//         {data.title}
//       </div>           
//     </div>
//   );
// };


import React, { useContext } from 'react';
import {MusicbarContext} from '../Context/musicbarcontext';


export const Albumlist = ({ data }) => {
  // console.log('inside',data)
  const { handleSelect} = useContext(MusicbarContext);

  const handlePlayClick = () => {
handleSelect(data,true)
  }

  //   // Trigger play/pause in the main audio player
  //   togglePlayPause();
  // };

  return (
    <div 
      className="relative group cursor-pointer"
      onClick={handlePlayClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        {/* Album art image */}
        <img 
          src={data.
            album_art_path
            } 
          alt={data.title} 
          className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Play icon visible only on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="white" 
            className="w-12 h-12"
          >
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      
      {/* Title */}
      <div className="mt-2 text-white text-center">
        {data.title}
      </div>
    </div>
  );
};
