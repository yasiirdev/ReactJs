export function Innerdiv() {
  return (
    <>
      <div className="innerdiv">
        <input type="number" placeholder="0.00" className="inputNum" required />
        <select name="fromUnit" id="fromUnit">
          <option value="">celseus</option>
          <option value="">fehrenheit</option>
          <option value="">kelvin</option>
        </select>
        <select name="toUnit" id="toUnit">
          <option value="">celseus</option>
          <option value="">fehrenheit</option>
          <option value="">kelvin</option>
        </select>
      </div>
    </>
  );
}
