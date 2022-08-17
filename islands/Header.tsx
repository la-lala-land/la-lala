/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

interface NavList {
  name: string;
  route: string;
  key: string;
}

export default function Header(props: { NavList: NavList[] }) {
  const [navOpen, toggleNavOpen] = useState(false);
  return (
    <header
      class={tw
        `flex flex-row w-full bg-gray-800 border-b-2 border-blue-300 relative`}
    >
      <div class={tw`flex flex-row w-full items-center p-4`}>
        <div class={tw`flex flex-row items-center justify-center lg:hidden`}>
          <button
            class={tw`
                      inline-flex
                      items-center
                      justify-center
                      p-2
                      rounded-md
                      text-white focus:outline-none
                    `}
            onClick={() => toggleNavOpen(!navOpen)}
          >
            <span class={tw`sr-only`}>Open menu</span>
            <svg
              class={tw`block h-8 w-8 text-white stroke-2`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              viewBox="0 0 30 24"
            >
              <g>
                <path class={tw`transition-all duration-500 transform ease-in-out`}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={navOpen
                    ? `M4 6 L24 24`
                    : `M4 6 L28 06`}
                />
                <path class={tw`transition-all duration-500 transform ease-in-out`}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={navOpen
                    ? `M4 6 L24 24`
                    : `M4 14 L 20 14`}
                />
                <path class={tw`transition-all duration-500 transform ease-in-out`}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d={navOpen
                    ? `M24 06 L 4 24`
                    : `M04 22 L 28 22`}
                />
              </g>
            </svg>
          </button>
        </div>
        <div
          class={tw
            `flex flex-col text-base lg:flex-row transition duration-500 ease-in-out transform absolute lg:static top-16 left-0 ${
              navOpen ? "-translate-x-0" : "-translate-x-140"
            } space-y-4 lg:space-y-0 lg:space-x-4 lg:items-center lg:translate-x-0 lg:max-w-7xl w-full text-white lg:mx-auto bg-gray-800 py-8 lg:py-2 px-8 lg:px-1 min-h-screen lg:min-h-0 overflow-y-auto`}
        >
          {props.NavList.map((x) => (
            <a
              class={tw
                `hover:text-blue-300 transition duration-500 px-4 lg:px-1 font-semibold`}
              href={x.route}
              key={x.key}
            >
              {x.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
