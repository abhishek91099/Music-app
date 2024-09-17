
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
    <div className='flex flex-col h-screen '>
    
    
   <div className='flex flex-row  h-dvh w-full'>
   <Sidebar/>
   <div className='border ml-2 '>
    {mylist.map((item)=>{
      return(

    <Playlist key={item.id} name={item.name} duration={item.duration} singer={item.Singer}/>
    )})
    }
  </div>
  
    </div>
    <div className='ml-2'>

<Musicbar/>
</div>
  </div>
  );
}
