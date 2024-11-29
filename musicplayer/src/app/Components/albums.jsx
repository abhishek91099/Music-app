import React, {useContext} from "react";
import {MusicbarContext} from "../Context/musicbarcontext";

export const Albumlist = ({data}) => {
  const {handleSelect} = useContext(MusicbarContext);
  const handlePlayClick = () => {
    handleSelect(data, true);
  };

  return (
    <div className="relative group cursor-pointer" onClick={handlePlayClick}>
      <div className="relative overflow-hidden rounded-lg">
        {/* Album art image */}
        <img
          src={data.album_art_path}
          alt={data.title}
          onError={(e) => e.target.src = 'https://www.teachhub.com/wp-content/uploads/2019/10/Our-Top-10-Songs-About-School.png'}
          className="w-40 h-40 transition-transform duration-300 group-hover:scale-110 object-cover mx-3"
        />

        {/* Play icon visible only on hover */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-12 h-12"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="mt-2 text-white text-center">{data.title}</div>
    </div>
  );
};
