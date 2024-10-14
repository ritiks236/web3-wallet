import { Checkbox } from "./ui/checkbox";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export const PhraseWarning = () => {
  return (
    <div className="m-10 flex flex-col relative gap-6 ">
      <Heading>Secret Recovery Phrase Warning</Heading>
      <div className="pt-2 px-20">
        <Text>On the next page, you will receive your</Text>
        <Text>secret recovery phrase.</Text>
      </div>
      <div></div>
      <div className=" ml-28 items-top flex space-x-2">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="absolute mr-20 cursor-pointer text-md font-medium tracking-tight text-primary/90 md:text-xl leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I understand that I am responsible for saving my secret recovery
            phrase, and that it is the only way to recover my wallet.
          </label>
        </div>
      </div>
    </div>
  );
};
