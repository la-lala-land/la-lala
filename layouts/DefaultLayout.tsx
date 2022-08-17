/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../islands/Header.tsx";
import PreFooter from "../components/PreFooter.tsx"
import Footer from "../components/Footer.tsx"
import Navigation from "../data/Navigation.ts"

interface LayoutProps {
  children: Partial<Element>;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      class={tw`
      flex flex-col
      min-h-screen
      font-montserrat
      text-lg
      tracking-wide
      text-gray-900
      bg-white
      dark:font-normal
      kurobg
    `}
    >
      <Header NavList={Navigation} />
      <main
        class={tw`
        flex-1
        w-full
        max-w-7xl
        p-4
        mx-auto
        md:px-8
        py-4
        mt-24
        bg-white
      `}
      >
        {children}
      </main>
      <PreFooter />
      <Footer />
      <style>
        @import
        url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      </style>
    </div>
  );
}
