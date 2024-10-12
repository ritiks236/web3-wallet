import { Heading } from "./Heading";
import { Text } from "./Text";
import { Button } from "./ui/button";

export const SelectNetwork = () => {
  return (
    <div className="flex flex-col  gap-6 ">
      <Heading>Select Network</Heading>
      <div className="pt-2 flex flex-col gap-1">
        <Text>Blockpocket supports currently</Text>
        <Text>Solana and Ethereum</Text>
      </div>
      <div className="relative flex flex-col gap-3 pt-8">
        <Button variant={"outline"} className="py-8">
          <span className="text-left text-2xl font-semibold text-primary/80">
            Solana
          </span>
        </Button>
        <Button variant={"outline"} className="py-8">
          <span className="text-left text-2xl font-semibold text-primary/80">
            Ethereum
          </span>
        </Button>
      </div>
    </div>
  );
};
