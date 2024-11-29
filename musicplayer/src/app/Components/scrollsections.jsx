"use client";
import {useRef} from "react";
export const  Scrollsection = ({Component, Heading,value}) => {
  const scrollContainerRef = useRef(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Amount to scroll (in pixels)
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Amount to scroll (in pixels)
        behavior: "smooth", // Smooth scroll
      });
    }
  };
  return (
    <div className="flex flex-col pt-5 pb-5 w-full h-50">
      <h1 className="text-lg font-semibold">{Heading}</h1>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white  z-10"
        >
          ←
        </button>

        <div
          ref={scrollContainerRef}
          className="flex flex-row mt-2 justify-start h-full overflow-x-auto scroll-smooth scrollbar-custom w-full flex-nowrap scrollbar-hide"
        >
          {value.map((i) => (
            <Component data={i} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white"
        >
          →
        </button>
      </div>
    </div>
  );
};
