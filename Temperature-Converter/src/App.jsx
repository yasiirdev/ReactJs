import { HtmlForConvertor } from "./components/HtmlForConvertor";
import { useState } from "react";
// pure function that round of to a specific number
function roundToDecimalPlaces(number, decimalPlaces) {
  const multiplier = Math.pow(10, decimalPlaces);
  return Math.round(number * multiplier) / multiplier;
}

export default function TemperatureConverter() {
  let [result, setresult] = useState("");
  const unitsHandle = (val, fromUnit, toUnit) => {
    // Celsius --> fehranheit
    if (fromUnit.value === "Celsius" && toUnit.value === "fehranheit") {
      let f = (val * 9) / 5 + 32;
      setresult(`${val} Celsius is ${f} Fehranheit`);
    }
    // Celsius --> Kelvin
    else if (fromUnit.value === "Celsius" && toUnit.value === "kelvin") {
      let k = roundToDecimalPlaces(Number(val) + 273.15, 3);
      setresult(`${val} Celsius is ${k} kelvin`);
    }
    // Celsius --> celsius
    else if (fromUnit.value === "Celsius" && toUnit.value === "Celsius") {
      setresult(`${val} Celsius is ${val} Celsius`);
    }
    //  fehranheit --> celsius
    else if (fromUnit.value === "fehranheit" && toUnit.value === "Celsius") {
      let c = roundToDecimalPlaces((val - 32) / 1.8, 3);
      setresult(`${val} Fehranheit is ${c} Celsius`);
    }
    // fehranheit --> kelvin
    else if (fromUnit.value === "fehranheit" && toUnit.value === "kelvin") {
      let ftok = roundToDecimalPlaces(((val - 32) * 5) / 9 + 273.15, 3);
      setresult(`${val} Fehranheit is ${ftok} Kelvin`);
    }
    // fehranheit --> fehranheit
    else if (fromUnit.value === "fehranheit" && toUnit.value === "fehranheit") {
      setresult(`${val} Fehranheit is ${val} fehranheit`);
    }
    // kelvin --> Celsius
    else if (fromUnit.value === "kelvin" && toUnit.value === "Celsius") {
      let ktoc = roundToDecimalPlaces(val - 273.15, 3);
      setresult(`${val} Kelvin is ${ktoc} Calsius`);
    }
    // kelvin --> fehranheit
    else if (fromUnit.value === "kelvin" && toUnit.value === "fehranheit") {
      let ktof = roundToDecimalPlaces(((val - 273.15) * 9) / 5 + 32, 3);
      setresult(`${val} Kelvin is ${ktof} Fehranheit`);
    }
    // kelvin --> kelvin
    else if (fromUnit.value === "kelvin" && toUnit.value === "kelvin") {
      setresult(`${val} Kelvin is ${val} Kelvin`);
    }
  };

  return (
    <>
      <HtmlForConvertor unitsHandle={unitsHandle} result={result} />
    </>
  );
}
