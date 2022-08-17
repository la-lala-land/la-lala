/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { generateName } from "lala";

export default function Toggle(props: h.JSX.HTMLAttributes<HTMLInputElement>) {
  const ToggleID = generateName(12);
  const [checked, setChecked] = useState(props.checked || false);
  return (
    <div>
      <label
        for={ToggleID}
        onClick={() => setChecked(!checked)}
        class={tw
          `cursor-pointer flex w-24 h-12 rounded-full transition duration-500 ease-in-out p-2 ${
            checked ? "bg-chaos-foreground" : "bg-chaos-tertiary"
          } relative`}
      >
        <div
          class={tw`absolute w-8 h-8 rounded-full inset-y-0 my-auto mx-2${
            checked ? "left-12 bg-chaos-tertiary" : "left-0 bg-chaos-foreground"
          } transition-all transform duration-500 ease-in-out`}
        />
      </label>

      <input
        type="checkbox"
        id={ToggleID}
        {...props}
        disabled={!IS_BROWSER || props.disabled}
        class={tw`hidden`}
      />
    </div>
  );
}
