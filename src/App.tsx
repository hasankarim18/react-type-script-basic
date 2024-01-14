// import { useState } from "react";
import "./App.css";
import FormUsingRef from "./pages/FormUsingRef";
import UseEffectExample from "./pages/UseEffectExample";
// import UseStateExample from "./pages/UseStateExample";
// import Contact from "./pages/Contact";
// import UserInfo from "./pages/UserInfo";
// import ComplexForm from "./pages/ComplexForm";
import UseReducerForm from "./pages/UseReducerForm";
import UseRefExamples from "./pages/UseRefExamples";

function App() {
  //   console.log('render');
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto my-0">
        <h1 className="text-center text-4xl">Hello World</h1>
        <div className=" bg-gray-100   p-4">
          {/* <UseStateExample counter={counter} setCounter={setCounter} /> */}
        </div>
        {/* <div className="p-4 bg-gray-100 mt-4 "> <Contact /></div>
        <div className="p-4 bg-gray-100 mt-4 "> <UserInfo /></div>
        <div className="p-4 bg-gray-100 mt-4 "> <ComplexForm /></div> */}
        {/* <div className="p-4 bg-blue-100 mt-4 ">
          <UseReducerForm />
        </div>
        <div className="p-4 bg-blue-100 mt-4 ">
          <UseEffectExample />
        </div> */}

        {/* <div className="p-4 bg-blue-100 mt-4 ">
          <UseRefExamples />
        </div> */}
        <div className="p-4 bg-blue-100 mt-4 ">
          <FormUsingRef />
        </div>
      </div>
    </>
  );
}

export default App;
