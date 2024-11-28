import {Musicbar} from "./Components/musicbar";
import {Playlist} from "./Components/playlist";
import {Rightsidebar} from "./Components/rightsidebar";
import {Sidebar} from "./Components/sidebar";
export default function Home() {
  const mylist = [
    {id: 1, name: "kitne dafe", duration: "4", Singer: "Mohit chauhan"},
    {id: 2, name: "kitne dafe", duration: "5", Singer: "Mohit chauhan"},
    {id: 3, name: "kitne dafe", duration: "3", Singer: "Mohit chauhan"},
    {id: 4, name: "kitne dafe", duration: "2", Singer: "Mohit chauhan"},
  ];
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      <div className="flex flex-row h-full justify-center  w-screen">
        <div className=" flex flex-col w-1/4 h-full">
          <Sidebar />
        </div>
        <div className="w-3/4 overflow-auto bg-[#1d092f]">
          <Playlist />
        </div>
        <div className="w-1/4 h-full">
          <Rightsidebar />
        </div>
      </div>
      <div className="bg-purple-1000 outline-none fixed bottom-0 left-0 w-full">
        <Musicbar />
      </div>
    </div>
  );
}
