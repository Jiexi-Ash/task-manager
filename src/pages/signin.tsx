import type { NextPage } from "next";
import { signIn, signOut } from "next-auth/react";

const SignIn: NextPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        type="button"
        className="rounded-md border border-gray-200 bg-teal-300 px-6 py-3 text-white transition-all duration-500 ease-in-out hover:bg-teal-500"
        onClick={() => signIn()}
      >
        GITHUB SIGN IN
      </button>

      <button
        type="button"
        className="rounded-md border border-gray-200 bg-teal-300 px-6 py-3 text-white transition-all duration-500 ease-in-out hover:bg-teal-500"
        onClick={() => signOut()}
      >
        GITHUB SIGN OUT
      </button>
    </div>
  );
};

export default SignIn;
