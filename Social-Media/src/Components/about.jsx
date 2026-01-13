import { useRef } from "react";
import "../styles/about.css";

export default function About() {
  let ball = useRef(null);

  const moveball = (e) => {
    ball.current.style.left = `${e.clientX}px`;
    ball.current.style.top = `${e.clientY}px`;
  };

  return (
    <div className="main" onMouseMove={moveball}>
      <div className="ball" ref={ball}></div>
      <div className="nav">
        <div id="left">
          <h5>MUhammad Yasir</h5>
        </div>
      </div>
      <div className="hore">
        <h1 className="text-capitalize h1-hello">hello.</h1>
        <h1>I am</h1>
        <h1 className="h1-yasiir">Yasiirdev</h1>
      </div>
      <div className="footer">
        <p>Responsive web | JavaSript | Redux toolkit | React </p>
      </div>
    </div>
  );
}
