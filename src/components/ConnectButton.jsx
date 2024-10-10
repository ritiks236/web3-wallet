"use client";

import { Button } from "./ui/button";

export const ConnectButton = () => {
  return (
    <div className="relative flex flex-col gap-4 mt-24">
      <Button
        variant={"default"}
        className="px-20 cursor-pointer"
        onClick={handler}
      >
        Create Wallet
      </Button>

      <Button variant={"outline"} className="px-20">
        Import Wallet
      </Button>
    </div>
  );
};
