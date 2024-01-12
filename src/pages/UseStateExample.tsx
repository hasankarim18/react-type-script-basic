import React from "react";

type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const UseStateExample = ({ counter, setCounter }: TCounter) => {
  // const [counter, setCounter] = useState(0);
  console.log("render");
  const incrementHandler = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  };

  const incrementByThreeHandler = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setCounter((prev) => prev - 1);
  };

  const asyncIncreaseHandler = () => {
    setTimeout(() => {
      setCounter((prev) => prev + 1);
    }, 2000);
  };

  return (
    <div>
      <h1 className="text-3xl pt-20 text-center">{counter}</h1>
      <div className="flex justify-center items-center flex-col pt-4">
        <div>
          <button
            onClick={incrementHandler}
            className="px-4 py-2 bg-green-400 hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={incrementByThreeHandler}
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-600"
          >
            Increment By 3
          </button>
          <button
            onClick={asyncIncreaseHandler}
            className="px-4 py-2 bg-cyan-400 hover:bg-cyan-600"
          >
            Async Increment
          </button>
          <button
            onClick={decrementHandler}
            className="px-4 py-2 bg-red-400 hover:bg-red-600"
          >
            Decrement
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => {
              setCounter(0);
            }}
            className="px-4 py-2 bg-blue-400 hover:bg-blue-600"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseStateExample;
