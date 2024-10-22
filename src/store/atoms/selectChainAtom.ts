import { atom } from "recoil";

export const selectChainAtom = atom<number>({
  key: "selectChainAtom",
  default: 501,
});
