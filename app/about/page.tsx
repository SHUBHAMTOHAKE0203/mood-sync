"use client"

import Link from "next/link";
import { Music4 } from "lucide-react";
import { WavyBackground } from "@/components/WavyBackground";
import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <>
      <style jsx global>{`
        @media (max-width: 1024px) {
          .container {
            padding: 2rem;
          }
          h1 {
            font-size: 3rem;
            text-align: center;
          }
          p, ul {
            text-align: center;
          }
          .content {
            flex-direction: column;
            align-items: center;
          }
          .text-section, .image-section {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          p {
            font-size: 1.1rem;
          }
          .container {
            padding: 1rem;
            width: 90%;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 1rem;
          }
          ul {
            font-size: 0.9rem;
          }
        }
      `}</style>
      <Navbar/>
      <WavyBackground>
        <div className="mt-[-30px] min-h-screen w-full flex items-center justify-center px-6 text-center">
          <div className="max-w-7xl w-full flex gap-8 bg-white/10 p-8 rounded-lg shadow-lg flex-row content">
            <div className="w-1/2 text-section">
              <h1 className="text-5xl text-white font-bold mb-6">MoodSync: Where Your Emotions Find Their Soundtrack</h1>
              <p className="text-lg text-white mb-6">
                Welcome to <b>MoodSync</b>~where your vibe sets the playlist! Ever had one of those days where only the perfect song could match your mood?
                That’s where we come in. MoodSync is your AI-powered music companion, designed to scan your emotions and create tailor-made playlists that feel just right.
                Whether you're soaring on cloud nine, vibing in deep focus mode, or just need a soundtrack for your midnight thoughts, we've got you covered.
              </p>
            </div>
            <div className="w-1/2 image-section">
              <h2 className="text-3xl text-white font-semibold mb-4">How It Works?</h2>
              <ul className="text-lg text-gray-300 list-disc list-inside space-y-2">
                <li><b>Mood Scan:</b> Let our AI read the room (or just your face, text, or input).</li>
                <li><b>Perfect Playlist:</b> Instantly generated, uniquely curated, always on point.</li>
                <li><b>Seamless Sync:</b> Connect to your favorite streaming services for instant playback.</li>
              </ul>
              <h2 className="text-3xl text-white font-semibold mt-6">Why MoodSync?</h2>
              <p className="text-lg text-gray-300 mt-2">
              Music is more than sound!it’s emotion, therapy, and magic. We sync your feelings with the right beats, turning moments into memories.
              </p>
              <p className="text-lg text-gray-300 mt-4 font-bold">What's your mood today? Let's find your playlist!</p>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}