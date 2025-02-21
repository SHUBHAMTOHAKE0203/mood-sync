// 'use client';

// export default function LoginPage() {
//   const handleLogin = () => {
//     window.location.href = '/api/signin';
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <button 
//         onClick={handleLogin}
//         className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
//       >
//         Connect with Spotify
//       </button>
//     </div>
//   );
// }


"use client"

import Link from "next/link";
import { Music4 } from "lucide-react";
import { WavyBackground } from "@/components/WavyBackground";
import Navbar from "@/components/Navbar";
import { Signika } from "next/font/google";

// Load Work Sans font with Next.js
const workSans = Signika({ subsets: ["latin"], weight: ["400", "600"] });
export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = '/api/signin';
  };

  return (
    <>
      <style jsx global>{`
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
        @layer base {
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 3.9%;
            --card: 0 0% 100%;
            --card-foreground: 0 0% 3.9%;
            --popover: 0 0% 100%;
            --popover-foreground: 0 0% 3.9%;
            --primary: 0 0% 9%;
            --primary-foreground: 0 0% 98%;
            --secondary: 0 0% 96.1%;
            --secondary-foreground: 0 0% 9%;
            --muted: 0 0% 96.1%;
            --muted-foreground: 0 0% 45.1%;
            --accent: 0 0% 96.1%;
            --accent-foreground: 0 0% 9%;
            --destructive: 0 84.2% 60.2%;
            --destructive-foreground: 0 0% 98%;
            --border: 0 0% 89.8%;
            --input: 0 0% 89.8%;
            --ring: 0 0% 3.9%;
            --radius: 0.5rem;
          }
          
          .dark {
            --background: 0 0% 3.9%;
            --foreground: 0 0% 98%;
            --card: 0 0% 3.9%;
            --card-foreground: 0 0% 98%;
            --popover: 0 0% 3.9%;
            --popover-foreground: 0 0% 98%;
            --primary: 0 0% 98%;
            --primary-foreground: 0 0% 9%;
            --secondary: 0 0% 14.9%;
            --secondary-foreground: 0 0% 98%;
            --muted: 0 0% 14.9%;
            --muted-foreground: 0 0% 63.9%;
            --accent: 0 0% 14.9%;
            --accent-foreground: 0 0% 98%;
            --destructive: 0 62.8% 30.6%;
            --destructive-foreground: 0 0% 98%;
            --border: 0 0% 14.9%;
            --input: 0 0% 14.9%;
            --ring: 0 0% 83.1%;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            text-align: center;
          }
          p {
            text-align: center;
          }
          .login-container {
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
        }
      `}</style>
      <Navbar/>
      <WavyBackground>
        <div className={`min-h-screen w-full justify-evenly mt-[-50px] items-center relative flex overflow-hidden flex-col md:flex-row text-center md:text-left ${workSans.className}`}>
          <div>
            <h1 className=" text-5xl  sm:m-0 sm:text-9xl text-white md:text-6xl">Your Music,<br />Your Mood</h1>
            <p className=" m-3 text-xl text-white mt-4 sm:text-lg">Let MoodSync curate the perfect playlist based on your mood :)</p>
          </div>
          <div className=" mt-[-50px] sm:mt-0 w-full max-w-md mx-4 bg-black/40 rounded-lg p-6 login-container">
            <div className="space-y-6 text-center">
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Music4 className="h-8 w-8" />
                <h1 className="text-3xl font-bold tracking-tight">MoodSync</h1>
              </div>
              <p className="text-zinc-300 px-4 md:px-8">
                Discover personalized playlists that match your mood, powered by Spotify
              </p>
            </div>
            <div className="space-y-4 mt-4">
              <button onClick={handleLogin} className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white py-3 px-4 rounded-md font-medium transition-colors">
                Continue with Spotify
              </button>
            </div>
            <div className="text-sm text-center text-zinc-300 mt-6 flex flex-col gap-4">
              <p>By continuing, you agree to MoodSync's Terms of Service and Privacy Policy</p>
              <div className="text-xs">
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
                {" • "}
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </WavyBackground>
    </>
  );
}
