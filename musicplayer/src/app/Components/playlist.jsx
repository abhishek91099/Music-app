export const Playlist =({name,duration,singer})=>{
    return(
    <div className="flex flex-row items-center justify-start border w-full">
        <h1 className="w-fit p-2" >{name}</h1>
        <h1 className="w-fit p-2">{duration}</h1>
        <h1 className="w-fit p-2" >{singer}</h1>
    </div>
)
}