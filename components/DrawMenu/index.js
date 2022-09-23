/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function DrawMenu(props) {
  const { open, setOpen } = props;
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setOpen(false)
    });
    return () => {
      router.events.off("routeChangeComplete", () => {
        console.log("stoped");
      });
    };
  }, [router.events]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-zinc-900 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title>
                        <div className="flex justify-between">
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
                          <button
                            type="button"
                            className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className="text-center text-xl">
                        <li>
                          <Link href="/about">
                            <a>about</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/projects">
                            <a>projects</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/work">
                            <a>work</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/contact">
                            <a>contact</a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
