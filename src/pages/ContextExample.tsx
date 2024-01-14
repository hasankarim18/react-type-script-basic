import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

const ContextExample = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div>
      <h1
        className={`${
          dark ? "bg-black text-white" : "bg-white text-black"
        } text-center text-3xl p-2 font-semibold`}
      >
        Context api example with dark and white
      </h1>
      <button
        onClick={() => {
          setDark(!dark);
        }}
        className={`mt-3 btn ${
          dark ? "bg-white text-black " : "bg-black text-white"
        } `}
      >
        {!dark ? "Make Text Bg white" : "Make Text Bg Black"}
      </button>
    </div>
  );
};

export default ContextExample;
