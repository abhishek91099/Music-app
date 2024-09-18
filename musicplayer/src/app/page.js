
import {Musicbar} from './Components/musicbar';
import { Playlist } from './Components/playlist';
import { Sidebar } from './Components/sidebar';
export default function Home() {
  const mylist=[
    {'id':1,'name':'kitne dafe','duration':'4','Singer':'Mohit chauhan'},
    {'id':2,'name':'kitne dafe','duration':'5','Singer':'Mohit chauhan'},
    {'id':3,'name':'kitne dafe','duration':'3','Singer':'Mohit chauhan'},
    {'id':4,'name':'kitne dafe','duration':'2','Singer':'Mohit chauhan'},
]
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
    
    
    <div className='flex flex-row flex-grow w-screen'>
    <div className="w-1/4 h-full">
          <Sidebar />
        </div>
      <div className='border w-3/4 overflow-auto'>
        {mylist.map((item)=>{
          return(

        <Playlist key={item.id} name={item.name} duration={item.duration} singer={item.Singer}/>
        )})
        }
      </div>
  
    </div>
    <div className='bg-purple-1000 outline-none h-1/6'>

<Musicbar/>
</div>
  </div>
  );
}
