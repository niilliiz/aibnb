import Head from "next/head";

import Header from "../components/Header";

import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </main>
  );
}
