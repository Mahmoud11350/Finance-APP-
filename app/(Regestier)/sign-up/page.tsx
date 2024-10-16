import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signUp } from "../actions";
import CreateUserBtn from "./Button";

const SignUp = () => {
  return (
    <div className="bg-white p-8 rounded-lg w-[500px]">
      <h1 className="font-bold text-3xl mb-4 uppercase ">Sign Up</h1>
      <form action={signUp}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 mx-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-white py-2 px-4 text-sm border rounded-lg w-full"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 mx-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="bg-white py-2 px-4 text-sm border rounded-lg w-full"
            placeholder="Email"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block mb-1 mx-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-white py-2 px-4 text-sm border rounded-lg w-full"
            placeholder="Password"
            required
          />
        </div>
        <CreateUserBtn />
      </form>
      <p className="text-center text-[#726D94]">
        Already have account?{" "}
        <Link href={"/sign-in"} className="text-black text-md font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
};
export default SignUp;
