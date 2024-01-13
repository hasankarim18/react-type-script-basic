import { useReducer } from "react";
import { constants } from "../utils/constants";

const initialState = { count: 0 };

const counterReducer = (currentState, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return {
        ...currentState,
        count: currentState.count + 1,
      };
    case constants.DECREMENT:
      return {
        ...currentState,
        count: currentState.count - 1,
      };
    case constants.INCRESEBYFIVE:
      return {
        ...currentState,
        count: currentState.count + action.payload,
      };
    case constants.RESET:
      return {
        ...currentState,
        count: 0,
      };
  }
};

const ComplexForm = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1 className="font-bold text-center">User Reducer Counter </h1>
      <div className="flex justify-center">
        <span className="font-bold text-5xl">{state.count}</span>
      </div>
      <div className="flex justify-center items-center flex-col pt-4">
        <div>
          <button
            onClick={() => dispatch({ type: constants.INCREMENT })}
            className="px-4 py-2 bg-green-400 hover:bg-green-600"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch({ type: constants.DECREMENT })}
            className="px-4 py-2 bg-red-400 hover:bg-red-600"
          >
            Decrement
          </button>
          <button
            onClick={() =>
              dispatch({ type: constants.INCRESEBYFIVE, payload: 5 })
            }
            className="px-4 py-2 bg-blue-400 hover:bg-blue-600"
          >
            Increment by 5
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => dispatch({ type: constants.RESET })}
            className="px-4 py-2 bg-blue-400 hover:bg-blue-600"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplexForm;
