/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Lala from "../islands/Lala.tsx";
import Layout from "../layouts/DefaultLayout.tsx";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Home(props: PageProps) {
  return (
    <Layout>
      <Head>
        <title>La Lala</title>
      </Head>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <p class={tw`my-6`}>
          La Lala refers to either of the web app / discord bot that are built
          around{" "}
          <a href="https://github.com/retraigo/lala" target="_blank">
            retraigo/lala
          </a>.
        </p>
        <p class={tw`my-6`}>
          Lala is a collection of random text-generating functions.
        </p>
        <p class={tw`my-6`}>
          Choose one of the functions from the menu.
        </p>
      </div>
    </Layout>
  );
}
