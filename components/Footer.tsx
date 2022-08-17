/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  return (
    <footer
      class={tw`bg-none text-black shadow-md text-center md:text-left`}
    >
      <div
        class={tw`
                sm:flex        
                items-center        
                justify-between        
                max-w-6xl        
                mx-auto        
                py-4        
                px-4 
                space-y-4 
                md:space-y-0 
                md:space-x-4        
                md:px-8        
                text-sm      
                `}
      >
        <div class={tw`flex-1 space-y-4 md:space-y-0 md:space-x-4`}>
          <span>
            Made by{" "}
            <a
              href="https://github.com/retraigo"
              target="_blank"
              class={tw`font-bold `}
            >
              NeTT
            </a>
          </span>
        </div>{" "}
        <div class={tw`flex-initial mt-3 sm:mt-0`}>
          <a
            href="https://nekooftheabyss.moe"
            target="_blank"
            class={tw`font-semibold`}
          >
            A cool link
          </a>
        </div>
      </div>
    </footer>
  );
}
