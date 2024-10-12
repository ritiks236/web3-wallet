"use client";

import { useComponentState } from "@/hooks/useComponentState";
import { HomePage } from "./HomePage";
import { CreateWallet } from "./CreateWallet";
import { ImportWallet } from "./ImportWallet";

export const Appbar = () => {
  const currentComponent = useComponentState();

  return (
    <div>
      {currentComponent === "HomePage" && <HomePage />}
      {currentComponent === "CreateWallet" && <CreateWallet />}
      {currentComponent === "ImportWallet" && <ImportWallet />}
    </div>
  );
};
