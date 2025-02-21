"use client";

import React from "react";
import { WavyBackground } from "../components/WavyBackground"; // Ensure the correct path
import Navbar from "../components/Navbar";
import { Signika } from "next/font/google";

// Load Work Sans font with Next.js
const workSans = Signika({ subsets: ["latin"], weight: ["400", "600"] });

const HomePage = () => {
  return (
    <>
      <Navbar />

      <WavyBackground>
        <div
          className={`flex flex-col mt-[-70px] items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 ${workSans.className}`}
        >
          {/* Logo Section */}
          <div className="flex items-center justify-center mb-6">
            <img src="logo.png" alt="MoodSync logo" className="w-16 h-16 mr-4" />
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white text-center">
              MOODSYNC
            </h1>
          </div>

          {/* Paragraph Section */}
          <p className="mt-[-15px] text-xl text-white text-center">
            Tune in to your emotions, and let the music play your story
          </p>

          {/* Button Section */}
          <button className="mt-6 p-2 px-6 text-lg bg-green-500 font-semibold text-black rounded-lg transition-all">
            Get Started
          </button>
        </div>
      </WavyBackground>
    </>
  );
};

export default HomePage;
