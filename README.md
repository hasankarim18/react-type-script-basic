# Incorporating Typescript with React

- [TypeSetting for lifting state up](#typeSetting-for-lifting-sate-up)
- [Handling form data in Object using useState](#Handling-form-data-in-Object-using-useState)
- [Handling form data in Object using useState](#Handling-form-data-in-Object-using-useState)
- [SideEffect useEffect--> cleneup effect](#SideEffect-useEffect)
- [Memory Leak Cleneup fetch request using AbortConroller](#Memory-Leak)
- [useRef as reference](#useRef)

### typeSetting for lifting sate up

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

---

### Handling form data in Object using useState

### Applying dry principle to handle multiple change handler

- type for form input e:<React.ChangeEvent<HTMLFormElement>
- name attribute of the input field must be the same for the state name
- [e.target.name]:e.target.value -- is used for dynamic name

```
import React, { useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ user });
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [inputName]: value,
    });
  };

  return (
    <>
        <form
          onSubmit={submitHandler}
        >
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={changeHandler}
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={changeHandler}
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="flex justify-end pr-2">
              <button
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
    </>
  );
};

export default UserInfo;

```

---

# Form handling using useReducer and typescript

```
import { useReducer } from "react";
// type for Action
type TAction = {
  type: string;
  payload: string;
};
// type for initialState
type TInitialState = {
  name: string;
  email: string;
};

const initialState: TInitialState = { name: "", email: "" };

// const reducer = (currentState: TInitialState, action: TAction)  we can use like this way or below
const reducer = (currentState: typeof initialState, action: TAction) => {
  switch (action.type) {
    case "addName":
      return {
        ...currentState,
        name: action.payload,
      };
    case "addEmail":
      return {
        ...currentState,
        email: action.payload,
      };

    default:
      return currentState;
  }
};

const UseReducerForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };

  return (
        <form
          onSubmit={handleSubmit}
        >
            <div>
              <label>Name</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "addName", payload: e.target.value })
                }
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "addEmail", payload: e.target.value })
                }
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div>
              <button
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
  );
};

export default UseReducerForm;

```

### typescript is used in 3 point

- When defining action
- When defining initialState
- In handle submit funtion
  ```
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(state);
  };
  ```
  `e: React.ChangeEvent<HTMLFormElement>` This part came from react

---

### SideEffect useEffect

- useEffect is use to handle sideEffects of react.
- sometimes cleneup function is required
- clene up function runs before the useEffect main body runs
- clene up function is required to stop memory leak
- memory leak is something that continues even element is unmounted from the dom
- in the below example if do not use clene up function in Counter component it will continue running even it is hidden from the dom.

```
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {!hidden && <div>{<Counter />}</div>}
      <button
        onClick={() => setHidden((prev) => !prev)}
      >
        Click
      </button>
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
      <h1>{count}</h1>
    </>
  );
};

export default UseEffectExample;

```

## Memory Leak

### Fetch request clene up on useEffect by AbortController class

```
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
```

- If we use AbortController signal and controller.abort() property then if the element is unmount before the fetch from database is done it will not fetch the data anymore.
- Otherwise it will fetch the in the background data even it is unmonted before the fetch request complete.
- This is called memory leak

#### Do not use object as a reference in useEffect

- Because object is a reference it will creact a new reference and can't be able to compare one object to another and will do unnecessary rerender
- Either use useMemo or use premitive value, primitve value can be compare

```
const Form = () => {
  const [user, setUser] = [{name:'', email:''}]

 -- wrong approach
  useEffect(()=> {
    console.log('Render')
  }[user])

  -- correct approach, put premitive value
  useEffect(()=> {
    console.log('Render')
  }[user.name,user.email])
}
```

---

### useRef

- useRef create a reference value, by changin ref will not trigger the component re-render
- when state change component get re-render first then states are updated by batch update
- unlike state , ref get updated instantly

```
import { useRef, useState } from "react";

const UseRefExamples = () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(0);

  const increment = () => {
    ref.current = ref.current + 1;
    setCounter((prev) => prev + 1);

    console.log("state => ", counter); // it will update after the component re-rendered completely
    console.log("ref => ", ref.current); // by clicking the button it will updated instantly before the re-render
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

```

- Thus ref does not re-render the component it con't be seen in the dom. you can see it in console, but not in the dom
- When ever a state change it will forced the componet to re-render and the ref value will be shown in the dom.

#### useRef can be use in form but not recomended it is called uncontrolled form handling

- useRef is mainly used for accessing the dom for animation or focus

```
import React, { useEffect, useRef } from "react";

// from handling with uncontrolled way

const FormUsingRef = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);

  // uncontrolled way of form handling not recomended
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(nameRef.current?.value);
  };

  // mainly used for dom manipulation for animation for focus
  // below when the form will mount it will automaticall focus on input
  useEffect(() => {
    nameRef.current?.focus();

    return () => {};
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Form using useRef</h1>
      <div className="m-4">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              ref={nameRef}
              type="text"
              name="name"
              id="name"
              className="border border-red-400 mr-4"
            />
            <button type="submit" className="btn btn-primary">
              Submitt
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUsingRef;

```
