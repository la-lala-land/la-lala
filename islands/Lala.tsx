/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import ModeString from "./ModeString.tsx";
import ModeName from "./ModeName.tsx";
import ModeStory from "./ModeStory.tsx";
import ModeChainMail from "./ModeChainMail.tsx";
import ModeRace from "./ModeRace.tsx";
import ModeCharacter from "./ModeCharacter.tsx";
import ModeEmail from "./ModeEmail.tsx";
import Counter from "./Counter.tsx";

export const LalaFunction = [
  "string",
  "name",
  "email",
  "character",
  "race",
  "chainmail",
  "story",
];

export default function Lala(props: { mode: string }) {
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>
        {props.mode.toLowerCase() === "string"
          ? <ModeString />
          : props.mode.toLowerCase() === "name"
          ? <ModeName />
          : props.mode.toLowerCase() === "email"
          ? <ModeEmail />
          : props.mode.toLowerCase() === "character"
          ? <ModeCharacter />
          : props.mode.toLowerCase() === "race"
          ? <ModeRace />
          : props.mode.toLowerCase() === "chainmail"
          ? <ModeChainMail />
          : props.mode.toLowerCase() === "story"
          ? <ModeStory />
          : (
            <p class={tw`my-6`}>
              That's probably not something Lala can do yet. Try picking
              something from the menu instead!
            </p>
          )}
      </p>
    </div>
  );
}
