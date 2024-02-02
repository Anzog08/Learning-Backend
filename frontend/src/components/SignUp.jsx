import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export const SignUp = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const loginHandler = async () => {
    try {
      const result = await axios.post("http://localhost:8000/signup", {
        username: username,
        email: email,
        password: password,
      });
      setUser(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e.response.data);
      setError(e.response.data);
    }
  };
  return (
    <div className="flex  w-[1000px] h-[2000px] items-center justify-center">
      <div className="flex flex-col w-[350px] h-[600px] border bg-slate-50 items-center justify-center rounded-3xl gap-6 ">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <div className="flex flex-col w-24 h-24 mt-[30px] items-center justify-center gap-6 p-8 ">
          <input
            className="w-[280px] h-[25px] text-sm rounded-md border border-slate-800 p-4"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="w-[280px] h-[25px] text-sm rounded-md border border-slate-800 p-4"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            className="w-[280px] h-[25px] text-sm rounded-md border border-slate-800 p-4"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <a href="/signup">
          <button
            onClick={loginHandler}
            className="w-[80px] mt-[30px] h-[30px] text-sm text-white bg-blue-700 rounded-md"
          >
            Sign up
          </button>
        </a>
      </div>
    </div>
  );
};
