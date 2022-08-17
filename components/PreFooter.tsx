/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function PreFooter() {
  return (
    <div
      class={tw`
      bg-transparent
      text-black
      md:h-48
      p-8
      flex flex-col space-y-8
      items-center
      `}
    >
      <hr
        class={tw`max-w-6xl border-2 rounded-xl border-gray-800 w-full`}
      />
      <div
        class={tw`
        max-w-6xl
        flex flex-col
        lg:flex-row
        text-center
        lg:text-left
        justify-between
        space-y-4
        lg:space-y-0
        items-start
        w-full
        `}
      >
        <div class={tw`p-2 flex flex-col space-y-4 items-start`}>
          <div class={tw`text-2xl font-black`}>Cool Name</div>
          <span
            class={tw`flex flex-row items-center fill-transparent stroke-1 space-x-2`}
          >
            <a
              href="https://nekooftheabyss.moe"
              target="_blank"
              class={tw`font-semibold flex flex-row items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="transparent"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke="black"
                strokeWidth="2"
                stroke-linejoin="round"
                class={tw`feather feather-globe`}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z">
                </path>
              </svg>
            </a>
            <a
              href="https://facebook.com/NekoOfTheAbyss"
              target="_blank"
              class={tw`font-semibold flex flex-row items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="transparent"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke="black"
                strokeWidth="2"
                stroke-linejoin="round"
                class={tw`feather feather-facebook`}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z">
                </path>
              </svg>
            </a>
          </span>
        </div>
        <div
          class={tw`
          p-2
          flex flex-col
          space-y-6
          items-start
          stroke-1
          `}
        >
          <span class={tw`font-bolder flex flex-row items-center`}>
            <span class={tw`font-semibold text-xl`}>Join us</span>
          </span>
          <div class={tw`flex flex-col text-sm`}>
            <a
              href="https://discord.gg/A69vvdK"
              target="_blank"
              class={tw`font-semibold flex flex-row items-center`}
            >
              <span>Discord Server</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
