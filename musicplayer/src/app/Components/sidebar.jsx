
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicIcon from '@mui/icons-material/Mic';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-purple-950 text-white w-full h-full justify-start pt-5 items-center">
      <div className="flex justify-start w-full px-16 ">
        <img src='music_10388203.png' className='justify-start h-30 w-20'/>
      </div>

      {/* Section for the icons and labels */}
      <div className="h-1/3 flex flex-col justify-center w-full">
        <div className="mx-10 flex items-center my-2">
          <div className="flex w-1/4 justify-center items-center">
            <MusicNoteIcon />
          </div>
          <div className="flex w-3/4">Music</div>
        </div>

        <div className="mx-10 flex items-center my-2">
          <div className="flex w-1/4 justify-center items-center">
            <RecordVoiceOverIcon />
          </div>
          <div className="flex w-3/4">Singer</div>
        </div>

        <div className="mx-10 flex items-center my-2">
          <div className="flex w-1/4 justify-center items-center">
            <MicIcon />
          </div>
          <div className="flex w-3/4">Find</div>
        </div>

        <div className="mx-10 flex items-center my-2">
          <div className="flex w-1/4 justify-center items-center">
            <CollectionsBookmarkIcon />
          </div>
          <div className="flex w-3/4">Collection</div>
        </div>
      </div>

      {/* Section for the Song List */}
      <div className="flex flex-col h-1/3 justify-center w-full">
        <div className="mx-10 flex justify-start text-white text-lg mb-4">Song list</div>

        <div className="flex flex-col mx-10 w-full">
          <div className="flex items-center mb-4">
            <div className="mx-4 text-white">—</div>
            <div className="text-gray-300">Favourite music</div>
          </div>

          <div className="flex items-center mb-4">
            <div className="mx-4 text-white">—</div>
            <div className="text-gray-300">Pop music</div>
          </div>

          <div className="flex items-center mb-4">
            <div className="mx-4 text-white">—</div>
            <div className="text-gray-300">BGM music</div>
          </div>
        </div>
      </div>
    </div>
  );
};
