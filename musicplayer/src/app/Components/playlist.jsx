import SearchIcon from '@mui/icons-material/Search';
export const Playlist =()=>{
    return(
    <div className="flex flex-row  px-5 items-center pt-5 w-full text-white">
        <div className="flex bg-purple-950 text-purple-50 justify-between items-center h-8 w-1/2">
            <input type='Text' placeholder="Search" className="bg-transparent outline-none w-full"/>
            <span><SearchIcon/></span>
        </div>

    </div>
)
}