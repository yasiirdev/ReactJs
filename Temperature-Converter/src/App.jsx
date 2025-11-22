import { HtmlForConvertor } from "./components/HtmlForConvertor";
export default function temperatureConverter() {
    // round of to a specific number
  function roundToDecimalPlaces(number, decimalPlaces) {
    const multiplier = Math.pow(10, decimalPlaces);
    return Math.round(number * multiplier) / multiplier;
  }

  const unitsHandle = (val, fromUnit, toUnit , pRef ) => {
    try {
      if (fromUnit.value === "Celsius" && toUnit.value === "fehranheit") {
        let f = (val * 9) / 5 + 32;
        pRef.current.innerText = `${val} Celsius is ${f} Fehranheit`;
      } else if (fromUnit.value === "Celsius" && toUnit.value === "kelvin") {
        let k = roundToDecimalPlaces(Number(val) + 273.15, 3);
        pRef.current.innerText = `${val} Celsius is ${k} kelvin`;
      } else if (
        fromUnit.value === "fehranheit" &&
        toUnit.value === "Celsius"
      ) {
        let c = roundToDecimalPlaces((val - 32) / 1.8, 3);
         pRef.current.innerText = `${val} Fehranheit is ${c} Calsius`;
      } else if (fromUnit.value === "fehranheit" && toUnit.value === "kelvin") {
        let ftok = roundToDecimalPlaces(((val - 32) * 5) / 9 + 273.15, 3);
         pRef.current.innerText = `${val} Fehranheit is ${ftok} Kelvin`;
      } else if (fromUnit.value === "kelvin" && toUnit.value === "Celsius") {
        let ktoc = roundToDecimalPlaces(val - 273.15, 3);
         pRef.current.innerText = `${val} Kelvin is ${ktoc} Calsius`;
      } else if (fromUnit.value === "kelvin" && toUnit.value === "fehranheit") {
        let ktof = roundToDecimalPlaces(((val - 273.15) * 9) / 5 + 32, 3);
         pRef.current.innerText = `${val} Kelvin is ${ktof} Fehranheit`;
      }
    } catch {
      console.log(`Error in formulaz`);
    }
    // fehranheit  kelvin
  };

  return (
    <>
      <HtmlForConvertor unitsHandle={unitsHandle}  />
    </>
  );
}
