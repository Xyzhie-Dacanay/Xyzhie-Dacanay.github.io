'use client'
import device from "@/components/ui/device.jpg"
import Image from "next/image"
import Loading from "../Loading"
import { useEffect, useState } from "react";
import { profile } from "console";
const AboutPage = () => {

  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
      // Simulate data fetching or initialization process
      setTimeout(() => {
        setIsLoading(false); // Set to false when content is ready
      }, 2000); // Adjust timing as needed
    }, []);
  
  return (
    <div className="flex flex-col xl:items-start justify-center w-full max-w-2xl mx-auto mb-14 sm:mb-16 pt-32 px-10  font-serif bg--50 dark:bg-slate-900 dark:text-zinc-100">
    <div className="py-6 max-w-2x">
      <h1 className="text-3xl md:text- mb-4 font-mono font-semibold text-slate-500 dark:text-violet-200 border-0 rounded-2xl bg-violet-200 dark:bg-slate-500 text-center">EDUCATION AND CERTIFICATIONS</h1>
      <h2 className="text-xl md:text-2xl font-mono font-semibold mt-6 text-slate-700 dark:text-violet-100">SECONDARY</h2>
      <h2 className="text-xl md:text-base font-mono font-semibold mt-2 text-slate-700 dark:text-violet-100">St. Blaise Christian School</h2>
      <h2 className="text-xl md:text-xs font-mono font-extralight mt-2 text-slate-700 dark:text-violet-100">2018-2021</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-violet-100 mb-6">
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>With High Honors</i></li>
      </ul>

      <h2 className="text-xl md:text-base font-mono font-semibold mt-2 text-slate-700 dark:text-violet-100">PHINMA - Univerity of Pangasinan</h2>
      <h2 className="text-sm md:text-sm font-mono font-light mt-2 text-slate-700 dark:text-violet-100"><i>Science Technology Engineering and Mathematics</i></h2>
      <h2 className="text-xl md:text-xs font-mono font-extralight mt-2 text-slate-700 dark:text-violet-100">2022-2023</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-violet-100">
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>With High Honors</i></li>
        <li className="mb-9 font-mono text-slate-700 dark:text-violet-100"><i>Leadership Award Capstone Project 2023</i></li>
      </ul>

      

      <h2 className="text-xl md:text-2xl font-mono font-semibold mt-6 text-slate-700 dark:text-violet-100">TERTIARY</h2>
      <h2 className="text-xl md:text-base font-mono font-semibold mt-2 text-slate-700 dark:text-violet-100">PHINMA - Univerity of Pangasinan</h2>
      <h2 className="text-sm md:text-sm font-mono font-light mt-2 text-slate-700 dark:text-violet-100"><i>Bachelor of Science in Information Technology</i></h2>
      <h2 className="text-xl md:text-xs font-mono font-extralight mt-2 text-slate-700 dark:text-violet-100">2023-Present</h2>
      <ul className="list-disc list-inside mt-2 text-slate-700 dark:text-violet-100 mb-6">
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>Certificate of Participation - Pythonic Alchemy: Brewing Magic in Code</i></li>
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>Certificate of Participation - Video Editing Workshop with DextyMN</i></li>
      </ul>

      <h1 className="text-3xl md:text- mb-4 font-mono font-semibold text-slate-500 dark:text-violet-200 border-0 rounded-2xl bg-violet-200 dark:bg-slate-500 text-center">EXPERIENCE</h1>
      <ul>
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>College of Arts and Sciences - CAS Leadership Camp 2023</i></li>
        <li className="mb-2 font-mono text-slate-700 dark:text-violet-100"><i>Pythonic Alchemy: Brewing Magic in Code</i></li>
      </ul>

      

      
    </div>
  </div>
  )
}

export default AboutPage