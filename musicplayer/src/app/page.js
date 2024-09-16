
import {Musicbar} from './Components/musicbar';
import { Playlist } from './Components/playlist';
export default function Home() {
  return (
   <div className='flex flex-col h-dvh w-full'>
    <header className='flex w-full'>hello</header>
    <Playlist/>
    <Musicbar/>
    </div>
  );
}
