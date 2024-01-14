import { useRef, useState } from "react";

const UseRefExamples = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);

  const increment = () => {
    ref.current = ref.current + 1;
    setCounter((prev) => prev + 1);
    console.log("state => ", counter);
    console.log("ref => ", ref.current);
  };

  return (
    <div className="text-center">
      <h1>useRef</h1>
      <div>
        <button
          onClick={() => {
            increment();
          }}
          className="btn-primary btn"
        >
          Increment Ref {ref.current}
        </button>
      </div>
    </div>
  );
};

export default UseRefExamples;
