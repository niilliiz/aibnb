import Head from "next/head";

import Header from "../components/Header";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header />
      {/* Header */}
      {/* Banner */}
    </main>
  );
}
