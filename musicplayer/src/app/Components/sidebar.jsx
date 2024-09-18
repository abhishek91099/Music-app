// import MusicNoteIcon from '@mui/icons-material/MusicNote';
// import MicIcon from '@mui/icons-material/Mic';
// import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
// import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// export const Sidebar=()=>{
//     return(
//         <div className="flex-row bg-purple-950 text-white w-full h-full justify-center items-center">
//             <div className="h-1/6 flex p-4 items-center justify-center">
//             logo
//             </div>
//             <div className=" h-1/3 flex-col  justify-center">
//                 <div className="mx-10 flex items-center justify-center"><div className='flex w-1/4 justify-center'><MusicNoteIcon/></div> <div className='flex w-3/4'>Music</div></div>
//                 <div className="mx-10 my-10 flex items-center justify-center"><div className='flex w-1/4 justify-center' ><RecordVoiceOverIcon/></div><div className='flex w-3/4'>Singer</div></div>
//                 <div className="mx-10 my-10 flex items-center justify-center"><div className='flex w-1/4 justify-center' ><MicIcon/></div><div className='flex w-3/4'>Find</div></div>
//                 <div className="mx-10 my-10 flex items-center justify-center"><div className='flex w-1/4 justify-center '><CollectionsBookmarkIcon/></div><div className='flex w-3/4 '>Collection</div></div>
//             </div>
//             <div className="flex flex-col h-1/3 justify-center w-2/3">
//   <div className='flex justify-start w-full text-white text-lg mb-4'>Song list</div>

//   <div className='flex flex-col w-full'>
//     <div className='flex justify-start items-center mb-2'>
//       <div className='mx-4 text-white'>—</div>
//       <div className='text-gray-300'>Favourite music</div>
//     </div>
    
//     <div className='flex justify-start items-center mb-2'>
//       <div className='mx-4 text-white'>—</div>
//       <div className='text-gray-300'>Pop music</div>
//     </div>

//     <div className='flex justify-start items-center mb-2'>
//       <div className='mx-4 text-white'>—</div>
//       <div className='text-gray-300'>BGM music</div>
//     </div>
//   </div>
// </div>

//         </div>
//     )
// }


import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MicIcon from '@mui/icons-material/Mic';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

export const Sidebar = () => {
  return (
    <div className="flex flex-col bg-purple-950 text-white w-full h-full justify-center items-center">
      <div className="h-1/3 flex p-4 justify-start w-full px-16 mb-10">
        <img src='music_10388203.png' className='justify-start'/>
      </div>

      {/* Section for the icons and labels */}
      <div className="h-1/3 flex flex-col justify-center w-full">
        <div className="mx-10 flex items-center my-6">
          <div className="flex w-1/4 justify-center">
            <MusicNoteIcon />
          </div>
          <div className="flex w-3/4">Music</div>
        </div>

        <div className="mx-10 flex items-center my-6">
          <div className="flex w-1/4 justify-center">
            <RecordVoiceOverIcon />
          </div>
          <div className="flex w-3/4">Singer</div>
        </div>

        <div className="mx-10 flex items-center my-6">
          <div className="flex w-1/4 justify-center">
            <MicIcon />
          </div>
          <div className="flex w-3/4">Find</div>
        </div>

        <div className="mx-10 flex items-center my-6">
          <div className="flex w-1/4 justify-center">
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
