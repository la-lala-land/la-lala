/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { generateName, generateChainMail } from "lala";
import FormInput from "../components/FormInput.tsx";

export default function ModeChainMail() {
  const [name, setName] = useState("");
  const formID = generateName(10);
  return (
    <div class={tw`flex flex-col space-y-8 items-center`}>
      <p class={tw`my-6`}>
        Generate a random chain message!
      </p>
      <div class={tw`lg:flex gap-2 w-full`}>
        <label for={formID} class={tw`flex-grow-1 font-bold text-xl`}>
          Custom name to use in chain mail:
        </label>
        <FormInput
          id={formID}
          type="text"
          //@ts-ignore I KNOW IT DOES EXIST
          onInput={(e) => setName(e.target?.value)}
        />
      </div>
      <div class={tw`flex flex-col space-y-2 items-center w-full max-w-2xl`}>
        <p class={tw`font-semibold uppercase text-xl`}>RESULT</p>
        <p class={tw`text-base break-words w-full text-chaos-foreground`}>
          {name ? generateChainMail(name) : generateChainMail()}
        </p>
      </div>
    </div>
  );
}
