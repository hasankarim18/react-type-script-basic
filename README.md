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

---

# Handling form data in Object using useState

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
