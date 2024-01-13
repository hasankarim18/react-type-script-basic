import { useReducer } from "react";

type TAction = {
  type: string;
  payload: string;
};

type TInitialState = {
  name: string;
  email: string;
};

const initialState: TInitialState = { name: "", email: "" };

// const reducer = (currentState: TInitialState, action: TAction) => {
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
    <div>
      <h1 className="text-3xl font-bold text-center">useReducer Form</h1>
      <div className="flex justify-center ">
        <form
          onSubmit={handleSubmit}
          className="border-2 p-4 rounded-md"
          action=""
        >
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "addName", payload: e.target.value })
                }
                className="border-gray-400 m-2 border px-8 py-2"
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) =>
                  dispatch({ type: "addEmail", payload: e.target.value })
                }
                className="border-gray-400 m-2 border px-8 py-2"
                type="text"
                name="email"
                id="email"
              />
            </div>
            <div className="flex justify-end pr-2">
              <button
                className="ml-4 border border-green-400 bg-green-300 hover:bg-green-400 px-8 py-2 rounded-md text-white"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UseReducerForm;
