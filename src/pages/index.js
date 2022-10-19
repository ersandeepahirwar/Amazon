import Head from "next/head";

import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta
          name="description"
          content="Amazon 2.0 built with Next.js by Codey Sandeep"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />

      <main className="mx-auto max-w-[1200px]">
        <Banner />
      </main>
    </div>
  );
}
