import React from "react";

const Register = () => {
  return (
    <div>
      <div className="w-full h-screen bg-red-500 flex items-center justify-center">
        <div className="w-[40%] h-[90%] border rounded-md flex flex-col gap-5  items-center justify-center">
          <div>
            <label htmlFor="" className="font-semibold ">
              Name
            </label>
            <div className="w-[400px] h-[70px] border rounded-md mt-2 ">
              {" "}
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full h-full font-semibold pl-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold ">
              Email
            </label>
            <div className="w-[400px] h-[70px] border rounded-md mt-2 ">
              {" "}
              <input
                type="text"
                placeholder="Enter Email"
                className="w-full h-full font-semibold pl-2 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="font-semibold ">
              Password
            </label>
            <div className="w-[400px] h-[70px] border rounded-md mt-2 ">
              {" "}
              <input
                type="text"
                placeholder="Enter Password"
                className="w-full h-full font-semibold pl-2 rounded-md"
              />
            </div>
          </div>
          <button className="px-10 py-3 bg-green-300">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
