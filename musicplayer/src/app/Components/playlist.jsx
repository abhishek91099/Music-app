import SearchIcon from '@mui/icons-material/Search';
export const Playlist =()=>{
    return(
    <div className="flex flex-row  px-5 items-center pt-5 w-full text-white">
        <div className="flex bg-purple-950 text-purple-50 justify-between items-center h-8 w-1/2">
            <input placeholder="Search" className="bg-transparent outline-none "/>
            <span><SearchIcon/></span>
        </div>

    </div>
)
}