import React from "react";
import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
// import LoadingScreen from "@/components/LoadingScreen"; might use next's loading.js instead
// import Login from "@/components/Login"; will change to homepage
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  return (
    <div className="bg-[#07081a] min-h-screen flex flex-col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="h-56 w-56 mb-10"
          src="https://i.imgur.com/yPJZbxv.png"
          alt=""
        />
        <h1 className="text-6xl text-[#f6df45] font-bold">ChainBase Hub🔒</h1>
        <h2 className="text-[#f6df45] py-8">
          Connect your wallet to get started!
        </h2>

        
      </div>
    </div>
  );
};
export default Home;
