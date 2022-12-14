/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { generateName, generateRace } from "lala";
import FormInput from "../components/FormInput.tsx";

export default function ModeRace() {
  const [name, setName] = useState("");
  const formID = generateName(10);
  return (
    <div class={tw`flex flex-col space-y-8 items-center`}>
      <p class={tw`my-6`}>
        Generate a random fantasy race!
      </p>
      <div class={tw`flex flex-col lg:flex-row items-center gap-2 w-full`}>
        <label for={formID} class={tw`flex-grow-1 font-bold text-xl`}>
          Custom name for the race:
        </label>
        <FormInput
          id={formID}
          type="text"
          onInput={(e) => setName(e.currentTarget.value)}
        />
      </div>
      <div class={tw`flex flex-col space-y-2 items-center w-full max-w-sm md:max-w-md lg:max-w-2xl`}>
        <p class={tw`font-semibold uppercase text-xl`}>RESULT</p>
        <p class={tw`text-base break-words w-full text-chaos-foreground`}>
          {name ? generateRace(name).description : generateRace().description}
        </p>
      </div>
    </div>
  );
}
