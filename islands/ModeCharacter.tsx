/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { generateCharacter } from "lala";
import FormInput from "../components/FormInput.tsx";

export default function ModeCharacter() {
  const [character, setCharacter] = useState(generateCharacter());
  function updateCharacter() {
    setCharacter(generateCharacter());
  }
  return (
    <div class={tw`flex flex-col space-y-8 items-center`}>
      <p class={tw`my-6`}>
        Generate a random character!
      </p>
      <div class={tw`flex flex-col items-center w-full`}>
        <button
        class = {tw`bg-chaos-tertiary text-chaos-foreground w-48 text-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-1`}
          onClick={updateCharacter}
        >
          Generate
        </button>
      </div>
      <div class={tw`flex flex-col space-y-2 items-center w-full max-w-sm md:max-w-md lg:max-w-2xl`}>
        <p class={tw`font-semibold uppercase text-xl`}>RESULT</p>
        <p class={tw`text-base break-words w-full text-center text-chaos-foreground`}>
          {character}
        </p>
      </div>
    </div>
  );
}
