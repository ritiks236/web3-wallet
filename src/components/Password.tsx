"use client";

import { useEffect, useState } from "react";
import { PasswordInput } from "./ui/password-input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import { passwordAtom } from "@/store/atoms/passwordAtom";

export const Password = () => {
  const [password, setPassword] = useRecoilState(passwordAtom);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [confPassword, setConfPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  useEffect(() => {
    if (confPassword) {
      setIsMatch(password === confPassword);
    }
  }, [password, confPassword]);

  const nextHandler = () => {
    // TODO: Encrypt the SeedPhrase with Password and store in local storage
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="mx-8 my-4 flex flex-col gap-4">
        <PasswordInput
          placeholder={"Password"}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
        <PasswordInput
          placeholder={"Confirm Password"}
          id="confPassword"
          onChange={(e) => setConfPassword(e.target.value)}
          onPaste={(e) => {
            e.preventDefault();
          }}
          onBlur={() => setIsMatch(password === confPassword)}
          required
          minLength={8}
          className={`${isMatch ? "" : "border-2 border-red-500"}`}
        />
        {!isMatch && (
          <span className="text-red-500 text-md">Password do not match.</span>
        )}
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
      <Button
        onClick={nextHandler}
        disabled={!termsAccepted}
        className="mx-16 p-6 mt-2 text-lg"
      >
        Next
      </Button>
    </form>
  );
};
