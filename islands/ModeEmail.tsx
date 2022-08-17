/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { generateEmail } from "lala";
import Toggle from "./Toggle.tsx";

export default function ModeEmail() {
  const [email, setEmail] = useState("");
  const [useCommon, setCommon] = useState(false);
  function refreshEmail() {
    setEmail(generateEmail(useCommon))
  }
  return (
    <div class={tw`flex flex-col space-y-8 items-center`}>
      <p class={tw`my-6`}>
        Generate a random email!
      </p>
      <div class={tw`flex flex-col lg:flex-row gap-2 w-full items-center`}>
        <p class={tw`flex-grow-1 font-bold text-xl`}>
          Use a common email service name?
        </p>
        <Toggle
          //@ts-ignore I KNOW IT DOES EXIST
          onChange={(e) => setCommon(e.target?.checked)}
        />
      </div>
      <div class={tw`flex flex-col items-center w-full`}>
        <button
        class = {tw`bg-chaos-tertiary text-chaos-foreground w-48 text-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-1`}
          onClick={refreshEmail}
        >
          Generate
        </button>
      </div>
      <div class={tw`flex flex-col space-y-2 items-center w-full max-w-2xl`}>
        <p class={tw`font-semibold uppercase text-xl`}>RESULT</p>
        <p class={tw`text-base break-words w-full text-center text-chaos-foreground`}>
          {email}
        </p>
      </div>
    </div>
  );
}
