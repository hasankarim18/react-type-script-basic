import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex gap-2 flex-col items-center">
      {/* { !hidden && <div className="text-center text-2xl">{<Counter />}</div>} */}
      <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-primary"
      >
        Click
      </button>
      <div>{hidden && <Todo />}</div>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("render");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1 className="text-center text-2xl">{count}</h1>
    </>
  );
};

const Todo = () => {
  const controller = new AbortController();

  // signal is property it needs to call
  const signal = controller.signal;

  // this can be used by axio // cancel token

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => {
        alert(data.title);
      });

    return () => {
      // abort is property it needs to call
      controller.abort();
    };
  }, []);
  return <div>Todo</div>;
};

export default UseEffectExample;

// Render, Event, Effect
