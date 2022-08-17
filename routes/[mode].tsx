/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Lala from "../islands/Lala.tsx";
import {LalaFunction} from "../islands/Lala.tsx";
import { capitalize } from "lala";
import Layout from "../layouts/DefaultLayout.tsx";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function Home(props: PageProps) {
  return (
    <Layout>
                      <Head>
        <title>{LalaFunction.includes(props.params.mode.toLowerCase()) ? capitalize(props.params.mode.toLowerCase() ) : "404"} - La Lala</title>
      </Head>
      <div class={tw`p-4 mx-auto max-w-screen-md`}>
        <Lala mode = {props.params.mode} />
      </div>
    </Layout>
  );
}


