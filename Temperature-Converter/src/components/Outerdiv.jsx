import { Innerdiv } from "./Innerdiv";

export function Outerdiv() {
  return (
    <>
      <div className="outerdiv">
              <h1 className="heading">Temperature Converter</h1>
              <i className="detail">Enter the temperature, select units and submit</i>
        <Innerdiv></Innerdiv>
      </div>
    </>
  );
}
