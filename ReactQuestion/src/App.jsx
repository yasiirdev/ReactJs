import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playingControl = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    nextIsPlaying === true ? playingControl.current.play() : playingControl.current.pause();
    setIsPlaying(nextIsPlaying);

  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video width="250" ref={playingControl}>
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

// import { useRef } from "react";

// export default function Page() {

//   const inputRef = useRef(null);
  
//   const HandleFocus = () => {
//     inputRef.current.focus();
//     console.log("done");
    
//   };

//   return (
//     <>
//       <nav>
//         <button onClick={HandleFocus}>Search</button>
//       </nav>
//       <input ref={inputRef} placeholder="Looking for something?" />
//     </>
//   );
// }
