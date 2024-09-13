"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import navLinks from "./ui/Nav";
import ThemeToggle from "./ui/ThemeToggle";


const Topbar = () => {
    const currentPath = usePathname();

   

    // links
    const links = navLinks();

    return (
        <main>
            <nav className=" fixed top-0 w-full bg-white/30 backdrop-blur-md  p-5  dark:bg-slate-900 dark:shadow-none ">
                <div className="flex mx-6  xl:mx-44 justify-between p-2">
                    <div className="text-4xl">
                        <h1 className="text-violet-900 dark:text-zinc-50 font-mono font-bold">DODI</h1>
                    </div>
                    <ol className="flex space-x-6 text-lg font-mono">
                        {links.map((link, index) =>
                            <li className="hidden md:block" key={index}>
                                <Link className={`${link.href === currentPath ? 'text-violet-800 underline underline-offset-2 dark:text-violet-800' : 'text-violet-800 dark:text-violet-100'} `} href={link.href}>{link.label}</Link>
                            </li>
                        )}
                        <div className="-mt-3"><ThemeToggle /></div>
                    </ol>
                </div>
            </nav>
        </main>
    );
}

export default Topbar;
