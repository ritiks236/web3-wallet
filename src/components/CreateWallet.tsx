import { PhraseWarning } from "./PhraseWarning";
import { SeedPhrase } from "./SeedPhrase";
import { SeedPhrasePage } from "./SeedPhrasePage";
import { SelectNetwork } from "./SelectNetwork";

export const CreateWallet = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <PhraseWarning />
      <SeedPhrasePage />
    </div>
  );
};
