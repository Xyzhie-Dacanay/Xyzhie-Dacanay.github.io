import navLinks from "./ui/Nav"
import Link from "next/link";
export default function Footer() {
    const navLink = navLinks();
  return (
    <footer className=" text-zinc-500 dark:text-zinc-50 font-serif px-5 md:px-32">
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600">
            {navLink.map((link, index)=>
            <Link key={index} href={link.href}>{link.label}</Link>)}
        </ul>
        <ul className="flex flex-col gap-y-5 py-10 text-center border-t dark:border-t-gray-600 ">
            <a href="https://www.facebook.com/profile.php?id=100066723944685">Facebook</a>
            <a href="https://www.instagram.com/rarc_0524">Instagram</a>
            <a href="https://www.linkedin.com/in/renz-aljon-cruz-ba13bb286">LinkedIn</a>
            <a href="https://github.com/RenzAljon24">Github</a>
        </ul>
        <div className="text-center border-t dark:border-t-gray-600 text-zinc-500 dark:text-zinc-50 font-serif p-3 ">
        <h1>Copyright © {new Date().getFullYear()} - Renz Aljon Cruz</h1>

        </div>
    </footer>
  )
}
