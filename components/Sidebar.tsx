"use client";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";



import React, { useState } from 'react';
import navLinks from './ui/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
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
          <ul className='flex flex-col gap-y-5 py-5 mb-6'>
            {links.map((link)=>
            <Link className={`${link.href === currentPath ? 'text-violet-700 dark:text-violet-200': 'text-zinc-500 dark:text-zinc-50'} font-serif`} key={link.href} href={link.href}>{link.label}</Link>)}
          </ul>
          <ul className="flex text-violet-600 dark:text-violet-300 text-2xl gap-x-5 pt-2 justify-center mb-16">
          <li>
            <a href="https://www.facebook.com/yzhiepwr24/" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_xy.zh" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/xyzhie-dacanay-b12393292" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/Xyzhie-Dacanay" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
          
        </div>
        
      </nav>

      <button className={' fixed bottom-5 right-5 text-4xl rounded-full p-3 border border-gray-800 bg-slate-900 dark:bg-zinc-50 dark:text-slate-900 text-zinc-50 md:hidden'} onClick={() =>{setOpen(!open)}}>{open?  <IoMdClose />  : <HiOutlineMenuAlt3 /> }</button>
    </>

  )
}

export default SideBar