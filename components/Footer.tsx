/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Footer() {
  return (
    <footer
      class={tw`bg-none text-white shadow-md text-center md:text-left`}
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
                lg:space-y-0 
                lg:space-x-4        
                lg:px-8        
                text-sm      
                `}
      >
        <div class={tw`flex-1 text-left`}>
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
        <div class={tw`flex-initial flex items-center gap-2`}>
          <span>Made with{" "}</span>
          <a
            href="https://fresh.deno.dev"
            target="_blank"
            class={tw`font-semibold text-chaos-foreground`}
          >
            <img src = "/fresh.svg" class = {tw`w-6`} alt = "fresh"/> 
          </a>
        </div>
      </div>
    </footer>
  );
}
