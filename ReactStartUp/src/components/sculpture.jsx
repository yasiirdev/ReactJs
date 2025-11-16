import { useState } from "react";
import { SculptureList } from "./sculptureList";

export default function Sculpture() {
  let [index, setClick] = useState(0);

  const nextHandle = function () {
    setClick(index + 1);
    if (index === 11) {
      setClick(0);
      return;
    }
  };

  const perviousHandle = function () {
    setClick(index - 1);
    if (index === 0) {
      setClick(11);
      return;
    }
  };

  let sculpture = SculptureList[index];

  return (
    <>
      <h1>
        {index + 1} / {SculptureList.length}
      </h1>
      <button onClick={nextHandle} className="button">
        Next
      </button>
      <button type="button" onClick={perviousHandle} className="button">
        Pervious
      </button>
      <article>{sculpture.artist}</article>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.name}</p>
      <summary>{sculpture.description}</summary>
    </>
  );
}
