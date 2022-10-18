import Head from "next/head";

import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta
          name="description"
          content="Amazon 2.0 built with Next.js by Codey Sandeep"
        />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
