/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { generateFantasyName, generateName, capitalize } from "lala";
import FormInput from "../components/FormInput.tsx";

export default function ModeName() {
  const [length, setLength] = useState(0);
  const formID = generateName(10);
  return (
    <div class={tw`flex flex-col space-y-8 items-center`}>
      <p class={tw`my-6`}>
        Generate a random name!
      </p>
      <div class={tw`lg:flex gap-2 w-full`}>
        <label for={formID} class={tw`flex-grow-1 font-bold text-xl`}>
          Length of generated name:
        </label>
        <FormInput
          id={formID}
          type="number"
          //@ts-ignore I KNOW IT DOES EXIST
          onInput={(e) => setLength(e.target?.value)}
        />
      </div>
      <div class={tw`flex flex-col space-y-2 items-center w-full max-w-2xl`}>
        <p class={tw`font-semibold uppercase text-xl`}>RESULT</p>
        <p class={tw`text-base break-words w-full text-center text-chaos-foreground`}>
          {capitalize((length ? generateName(length) : generateFantasyName()).toLowerCase())}
        </p>
      </div>
    </div>
  );
}
