import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";

function App() {
  //   console.log('render');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-center text-4xl">Hello World</h1>
        <div className="max-w-7xl bg-gray-50 mx-auto my-0 min-h-screen p-4">
          <UseStateExample counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
}

export default App;
