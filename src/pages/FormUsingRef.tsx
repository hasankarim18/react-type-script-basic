import React, { useEffect, useRef } from "react";
import CustomInputs from "../components/CustomInputs";

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
          <CustomInputs ref={nameRef} className="border border-blue-500 btn" />
          <div className="mt-2">
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
