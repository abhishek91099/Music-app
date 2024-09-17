export const Sidebar=()=>{
    return(
        <div className="flex-row w-full">
            <div className="flex-1 h-fit">logo</div>
            <div className="flex-1 mt-4 mb-4">
                <div className="m-2">Music</div>
                <div className="m-2">Singer</div>
                <div className="m-2">Find</div>
                <div className="m-2">Collection</div>
            </div>
            <div className="flex-1">
                <ul>SongList
                <li>- favourit</li>
                <li>- Pop</li>
                <li>- BGM</li>

                </ul>

            </div>
        </div>
    )
}