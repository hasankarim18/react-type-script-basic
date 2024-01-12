import React, { useState } from "react";

const UserInfo = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  //

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
      <h2 className="font-bold text-center">useState in object</h2>
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
                onChange={changeHandler}
                className="border-gray-400 m-2 border px-8 py-2"
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="email">Email</label>
              <input
                onChange={changeHandler}
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
    </>
  );
};

export default UserInfo;
