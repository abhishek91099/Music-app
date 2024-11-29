import { CustomAudioPlayer } from "./customaudio";
export const Musicbar = () => {
  return (
    <div className="w-full h-20 flex justify-evenly items-center bg-[#2a0f41] text-white">
      <div className="w-3/4 h-full ">
        <CustomAudioPlayer/>
      </div>
      <div></div>
    </div>
  );
};
