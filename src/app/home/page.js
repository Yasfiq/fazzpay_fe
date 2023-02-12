"use client";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { useState } from "react";
import Cashflow from "./Cashflow";
import TransactionsHistory from "./History";
import MenuBar from "./MenuBar";
import Wallet from "./Wallet";

const Home = () => {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      <Header />
      <div className="container grid grid-cols-12 py-10">
        <MenuBar active={active} setActive={setActive} />
        <div className="col-span-9 h-max">
          <Wallet />
          <div className="grid grid-cols-12 mt-10 gap-x-20">
            <Cashflow />
            <TransactionsHistory />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
