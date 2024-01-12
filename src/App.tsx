import { useState } from "react";
import "./App.css";
import UseStateExample from "./pages/UseStateExample";
import Contact from "./pages/Contact";
import UserInfo from "./pages/UserInfo";

function App() {
  //   console.log('render');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto my-0">
        <h1 className="text-center text-4xl">Hello World</h1>
        <div className=" bg-gray-100   p-4">
          <UseStateExample counter={counter} setCounter={setCounter} />
        </div>
        <div className="p-4 bg-gray-100 mt-4 ">
          <Contact />
        </div>
        <div className="p-4 bg-gray-100 mt-4 ">
          <UserInfo />
        </div>
      </div>
    </>
  );
}

export default App;
