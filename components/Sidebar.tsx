"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";



import React, { useState } from 'react';
import navLinks from './ui/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const SideBar = () => {
  const currentPath = usePathname();

  //links
  const links = navLinks();

  //state
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={` ${open? 'w-1/2' : '-ml-96'} fixed top-0 flex flex-col h-full bg-white border dark:border-gray-700 shadow-lg duration-300 ease-in-out md:hidden gap-y-5 pt-20 dark:bg-slate-900 dark:shadow-none`}>
        <div className="px-10">
          <h1 className='text-xs dark:text-white font-sans'>EXPLORE:</h1>
          <ul className='flex flex-col gap-y-5 py-5'>
            {links.map((link)=>
            <Link className={`${link.href === currentPath ? 'text-teal-700 dark:text-teal-300': 'text-zinc-500 dark:text-zinc-50'} font-serif`} key={link.href} href={link.href}>{link.label}</Link>)}
          </ul>
          <ul className="flex flex-col gap-y-5 pt-5 border-t text-zinc-500 dark:text-zinc-50 font-serif ">
                  <a href="https://www.facebook.com/profile.php?id=100066723944685">Facebook</a>
                  <a href="https://www.instagram.com/rarc_0524">Instagram</a>
                  <a href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286">LinkedIn</a>
                  <a href="https://github.com/RenzAljon24">Github</a>
          </ul>
        </div>
        
      </nav>

      <button className={' fixed bottom-5 right-5 text-4xl rounded-full p-3 border border-gray-800 bg-slate-900 dark:bg-zinc-50 dark:text-slate-900 text-zinc-50 md:hidden'} onClick={() =>{setOpen(!open)}}>{open?  <IoMdClose />  : <HiOutlineMenuAlt3 /> }</button>
    </>

  )
}

export default SideBar