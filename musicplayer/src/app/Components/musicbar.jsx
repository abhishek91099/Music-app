export const Musicbar=()=>{
    return (
        <div className="w-full flex justify-center bg-purple-900 text-white">
        <h1>Musicbar</h1>
        <audio controls>
  <source src="audio.mp3" type="audio/mpeg"/>
  Your browser does not support the audio element. The audio file "Bol Do Na Zara" cannot be played.
</audio>
        </div>
    )
}