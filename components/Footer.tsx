import navLinks from "./ui/Nav"
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
    const navLink = navLinks();
  return (
    <footer className=" text-zinc-600 dark:text-violet-100 font-mono px-5 md:px-32">
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
        <div className="text-center border-t dark:border-t-gray-600 text-zinc-500 dark:text-zinc-50 font-mono p-3 ">
        <h1>Copyright © {new Date().getFullYear()} - Xyzhie F. Dacanay</h1>

        </div>
    </footer>
  )
}
