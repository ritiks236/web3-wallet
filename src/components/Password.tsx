"use client";

import { useState } from "react";
import { PasswordInput } from "./ui/password-input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { z } from "zod";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <form className="flex flex-col gap-2">
      <div className="mx-8 my-4 flex flex-col gap-4">
        <PasswordInput
          placeholder={"Password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PasswordInput placeholder={"Confirm Password"} id="confPassword" />
        <div>{toggle}</div>
      </div>
      <div className=" ml-24 items-top flex space-x-2">
        <Checkbox
          id="terms1"
          onCheckedChange={() => setTermsAccepted(!termsAccepted)}
        />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="absolute mx-2 cursor-pointer text-sm font-medium text-gray-500 tracking-tight text-primary/90 md:text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to Terms of Service
          </label>
        </div>
      </div>
      <Button disabled={!termsAccepted} className="mx-16 p-6 mt-2 text-lg">
        Next
      </Button>
    </form>
  );
};