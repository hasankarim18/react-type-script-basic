// import { useState } from "react";
import { useContext, useState } from "react";
import "./App.css";
import FormUsingRef from "./pages/FormUsingRef";
import UseEffectExample from "./pages/UseEffectExample";
// import UseStateExample from "./pages/UseStateExample";
// import Contact from "./pages/Contact";
// import UserInfo from "./pages/UserInfo";
// import ComplexForm from "./pages/ComplexForm";
import UseReducerForm from "./pages/UseReducerForm";
import UseRefExamples from "./pages/UseRefExamples";
import ContextExample from "./pages/ContextExample";
import { MenuItem, MenuList } from "./components/Menu";
import Profile from "./pages/Profile";
import GameResult from "./pages/GameResult";
import UsersContainer from "./components/UsersContainer";

function App() {
  //   console.log('render');
  // const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto my-0">
        <MenuList>
          <MenuItem></MenuItem>
        </MenuList>
        <div className="my-4">
          <Profile />
          <div className="mt-2 pt-2 border border-t-red-200">
            <GameResult />
          </div>
        </div>
        <div className="min-h-24 bg-blue-400">
          <h1 className="text-center mt-8">User Containers</h1>
          <UsersContainer />
        </div>
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
        <div className="p-4 bg-blue-100 mt-4 ">
          <ContextExample />
        </div>
      </div>
    </>
  );
}

export default App;
