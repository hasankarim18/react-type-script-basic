import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log({ name, email });
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={submitHandler}
        className="border-2 p-4 rounded-md"
        action=""
      >
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="border-gray-400 m-2 border px-8 py-2"
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
  );
};

export default Contact;
