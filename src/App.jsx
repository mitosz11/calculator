import Calculator from "./components/Calculator";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 text-gray-200">
      <h1 className="text-center text-3xl font-bold mt-12 mb-6 text-gray-400">
        Calculator
      </h1>
      <div className="flex items-center justify-center w-full max-w-md p-4 rounded-lg shadow-lg">
        <Calculator />
      </div>
    </div>
  );
};

export default App;
