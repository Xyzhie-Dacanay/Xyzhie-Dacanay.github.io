"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "../components/ui/Nav";
import ThemeToggle from "./ui/ThemeToggle";


const Topbar = () => {
    const currentPath = usePathname();

   

    // links
    const links = navLinks();

    return (
        <main>
            <nav className=" fixed top-0 w-full bg-white/30 backdrop-blur-sm  p-5  dark:bg-slate-900 dark:shadow-none ">
                <div className="flex mx-6  xl:mx-44 justify-between p-2">
                    <div className="text-4xl">
                        <h1 className="text-slate-900 dark:text-zinc-50 font-serif">RARC</h1>
                    </div>
                    <ol className="flex space-x-6 text-2xl font-serif">
                        {links.map((link, index) =>
                            <li className="hidden md:block" key={index}>
                                <Link className={`${link.href === currentPath ? 'text-teal-300 underline underline-offset-2 dark:text-teal-300' : 'text-zinc-800 dark:text-zinc-100'} `} href={link.href}>{link.label}</Link>
                            </li>
                        )}
                        <div className="-mt-1"><ThemeToggle /></div>
                    </ol>
                </div>
            </nav>
        </main>
    );
}

export default Topbar;
