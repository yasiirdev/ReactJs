import { useRef } from "react";

export function HtmlForConvertor({ unitsHandle }) {
  const inputVal = useRef(null);
  const fromVal = useRef(null);
  const toVal = useRef(null);
  let pRef = useRef(null);

  const HandleSubmit = (e) => {
    e.preventDefault();
    let currentVal = inputVal.current.value;
    let userFromSelect =
      fromVal.current.options[fromVal.current.options.selectedIndex];
    let userToSelect =
      toVal.current.options[toVal.current.options.selectedIndex];
    unitsHandle(currentVal, userFromSelect, userToSelect , pRef);
  };

  return (
    <>
      <form className="innerdiv">
        <h1 className="heading">Temperature Converter</h1>
        <i className="detail">Enter the temperature, select units and submit</i>

        <input
          type="number"
          name="convertNum"
          id="convertNum"
          className="convertNum"
          placeholder="0.00"
          ref={inputVal}
          required
        />
        {/* from Value */}
        <select name="fromUnit" id="fromUnit" ref={fromVal}>
          <option value="Celsius">Celsius</option>
          <option value="fehranheit">Fehrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>

        {/* to value */}
        <select name="toUnit" id="toUnit" ref={toVal}>
          <option value="Celsius">Celsius</option>
          <option value="fehranheit">Fehrenheit</option>
          <option value="kelvin">Kelvin</option>
        </select>

        <button
          type="submit"
          className="convertBt"
          onClick={(e) => HandleSubmit(e)}
        >
          Convert
        </button>
        <p className="result" ref={pRef}></p>
      </form>
    </>
  );
}
