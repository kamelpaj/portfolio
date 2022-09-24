import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HEADER_LINKS } from "../../constants";
import DrawMenu from "../DrawMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const HamburgerIcon = (
    <button
      type="button"
      className="text-white bg-zinc-800 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full p-4 inline-flex mr-2  dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 self-center lg:invisible"
      onClick={() => setOpen(true)}
    >
      <svg
        aria-hidden="true"
        className="w-4 h-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 7.5H14.5M1.5 2.5H14.5M1.5 12.5H14.5"
          stroke="white"
          strokeLinecap="round"
        ></path>
      </svg>
      <span className="sr-only">Menu button</span>
    </button>
  );
  return (
    <header className="fixed w-screen flex justify-center lg:justify-evenly h-16">
      <nav className="rounded-full bg-zinc-900/95 w-11/12 lg:w-1/2 flex justify-between backdrop-blur-sm">
        <Link href="/">
          <a>
            <Image
              alt="Adam face"
              src="/logo192.png"
              width={64}
              height={64}
              className="hover:cursor-pointer"
              layout="fixed"
            />
          </a>
        </Link>
        {HamburgerIcon}
        <div className="hidden lg:flex self-center gap-8">
          {HEADER_LINKS.map((hl, i) => (
            <Link key={i} href={hl.url}>
              <a className="text-lg m-4 rounded-lg text-zinc-400 hover:text-zinc-200">
                {hl.label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
      <DrawMenu open={open} setOpen={setOpen} />
    </header>
  );
};
