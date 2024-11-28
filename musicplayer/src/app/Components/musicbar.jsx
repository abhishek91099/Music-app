import { CustomAudioPlayer } from "./customaudio";
export const Musicbar = () => {
  return (
    <div className="w-full h-20 flex justify-evenly items-center bg-[#2a0f41] text-white">
      {/* <div className="flex flex-row  w-1/3 p-4">
        <img
          src="https://i.pinimg.com/originals/31/f7/5c/31f75c2389f75cff7e41138316d69438.jpg"
          className="h-14 w-14 mx-2 rounded-full object-cover"
        />
        <div>
          <div className="">All the stars</div>
          <div className="text-purple-500 text-[12px]">kendrick Lamar and SZA</div>
        </div>
      </div> */}
      <div className="w-3/4 h-full ">
        <CustomAudioPlayer/>
      </div>
      <div></div>
    </div>
  );
};
