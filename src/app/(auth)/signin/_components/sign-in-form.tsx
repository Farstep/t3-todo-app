"use client";

import * as React from "react";
import { signIn } from "next-auth/react";

export function SignInForm() {
  return (
    <div className="text-center">
      <div className="mx-auto max-w-3xl">
        <div className="flexjustify-center"></div>
        <div>
          <button
            className="inline-flex w-full cursor-pointer items-center justify-center rounded-md p-4 text-xl font-bold hover:text-green-five"
            onClick={() =>
              void signIn("github", {
                callbackUrl: "/",
              })
            }
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
