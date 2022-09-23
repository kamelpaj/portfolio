import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  const HamburgerIcon = (
    <button
      type="button"
      className="text-white bg-zinc-800 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 rounded-full p-4 inline-flex mr-2  dark:hover:bg-zinc-700 dark:focus:ring-zinc-800 self-center lg:hidden"
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
      <span className="sr-only">Icon description</span>
    </button>
  );
  return (
    <header className="fixed w-screen flex justify-center top-3 h-16 ">
      <div className="rounded-full bg-zinc-900/95 w-11/12 flex justify-between backdrop-blur-sm ">
        <Link href="/">
          <a>
            <Image
              alt="Adam face"
              src="/logo192.png"
              width={64}
              height={64}
              className="hover:cursor-pointer"
            />
          </a>
        </Link>
        {HamburgerIcon}
      </div>
    </header>
  );
};
