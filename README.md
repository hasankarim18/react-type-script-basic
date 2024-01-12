## type setting for lifting sate up

#### Parent component

```
import { useState } from "react";
import "./App.css";
import Child from "./pages/Child";

function Parent() {

  const [counter, setCounter] = useState(0);

  return (
    <>
      <div>
        <div>
          <UseStateExample counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </>
  );
}

export default App;

```

#### ChildComponent

```
import React from "react";

// type for counter and setCounter
type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Child = ({ counter, setCounter }: TCounter) => {
  return (
    <div>

    </div>
  );
};

export default Child;

```
