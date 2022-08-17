/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function FormInput(
  props: h.JSX.HTMLAttributes<HTMLInputElement>,
) {
  return (
    <input
      class={tw`max-w-md p-2 w-full border-chaos-foreground bg-chaos-secondary focus:border-2`}
      {...props}
    />
  );
}
