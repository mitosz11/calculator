import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [isOperatorLast, setIsOperatorLast] = useState(false);

  const handleButtonClick = (value) => {
    const operators = ["+", "-", "*", "/", "%"];
    const lastChar = input[input.length - 1];

    if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    }

    if (isOperatorLast && value === "-") {
      setInput((prev) => prev + value);
      setIsOperatorLast(false);
      return;
    }

    if (value === "." && !input.includes(".")) {
      setInput(input === "0" ? "0." : input + ".");
      return;
    }

    if (input === "0" && !operators.includes(value)) {
      setInput(value);
    } else {
      setInput((prev) => prev + value);
    }

    setIsOperatorLast(operators.includes(value));
  };

  const handleCalculate = () => {
    try {
      const expression = input.replace(",", ".");

      const result = evaluate(expression);

      setInput(result.toString().replace(".", ","));
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("0");
    setIsOperatorLast(false);
  };

  const toggleNegative = () => {
    if (!isOperatorLast) {
      setInput((prev) => (prev[0] === "-" ? prev.slice(1) : "-" + prev));
    } else {
      setInput((prev) => prev + "-");
      setIsOperatorLast(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-4 bg-gray-800 rounded-lg shadow-lg">
      <Display value={input} />
      <div className="grid grid-cols-4 gap-2 text-3xl">
        <Button onClick={handleClear} className="bg-red-600 hover:bg-red-900">
          C
        </Button>
        <Button
          onClick={toggleNegative}
          className="bg-blue-600 hover:bg-blue-900"
        >
          -/+
        </Button>
        <Button
          onClick={() => handleButtonClick("%")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          %
        </Button>
        <Button
          onClick={() => handleButtonClick("/")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          /
        </Button>
        <Button
          onClick={() => handleButtonClick("7")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          7
        </Button>
        <Button
          onClick={() => handleButtonClick("8")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          8
        </Button>
        <Button
          onClick={() => handleButtonClick("9")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          9
        </Button>
        <Button
          onClick={() => handleButtonClick("*")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          x
        </Button>
        <Button
          onClick={() => handleButtonClick("4")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          4
        </Button>
        <Button
          onClick={() => handleButtonClick("5")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          5
        </Button>
        <Button
          onClick={() => handleButtonClick("6")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          6
        </Button>
        <Button
          onClick={() => handleButtonClick("-")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          -
        </Button>
        <Button
          onClick={() => handleButtonClick("1")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          1
        </Button>
        <Button
          onClick={() => handleButtonClick("2")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          2
        </Button>
        <Button
          onClick={() => handleButtonClick("3")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          3
        </Button>
        <Button
          onClick={() => handleButtonClick("+")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          +
        </Button>
        <Button
          onClick={() => handleButtonClick(".")}
          className="bg-blue-600 hover:bg-blue-900"
        >
          .
        </Button>
        <Button
          onClick={() => handleButtonClick("0")}
          className="bg-gray-500 hover:bg-gray-700"
        >
          0
        </Button>
        <Button
          onClick={handleCalculate}
          className="bg-blue-600 hover:bg-blue-900 col-span-2"
        >
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
