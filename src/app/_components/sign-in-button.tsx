"use client";

import { signIn } from "next-auth/react";

export function SignInButton() {
  return (
    <button
      className="mb-5 inline-flex cursor-pointer items-center justify-center rounded-md px-4 py-2 font-semibold outline outline-2 outline-offset-2 outline-green-one hover:text-green-five"
      onClick={() => void signIn()}
    >
      Sign In
    </button>
  );
}
