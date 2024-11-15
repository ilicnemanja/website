"use client";

import { Squeeze as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { TextHoverEffect } from "@/components/TextHoverEffect";
import { Button } from "@/components/ui/button";

import Theme from "./Theme";

const Navbar = () => {
  const [path, setPath] = useState("");
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    if (isMounted) {
      console.log("Mounted: ", window.location.hash);
      setPath(window.location.hash);
    } else {
      setMounted(true);
    }
  }, [isMounted]);

  return (
    <nav className="dark:hover mx-4 flex max-w-screen-xl items-center justify-between pt-8 font-sansation text-primary-100 dark:text-secondary-100 md:-mt-14 lg:pt-0 xl:mx-auto">
      <TextHoverEffect text="Nemanja | Software Engineer" />

      <span className="flex text-primary-100 dark:text-secondary-100 md:hidden">
        <Hamburger size={30} />
      </span>

      <ul className="hidden items-center gap-[24px] text-[18px] md:flex">
        <li>
          <Link
            onClick={() => setPath("#services")}
            href="#services"
            className={`hover:text-primary-200 dark:hover:text-secondary-200 ${path === "#services" ? "text-primary-200 dark:text-secondary-200" : ""}`}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setPath("#about")}
            href="#about"
            className={`hover:text-primary-200 dark:hover:text-secondary-200 ${path === "#about" ? "text-primary-200 dark:text-secondary-200" : ""}`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setPath("#projects")}
            href="#projects"
            className={`hover:text-primary-200 dark:hover:text-secondary-200 ${path === "#projects" ? "text-primary-200 dark:text-secondary-200" : ""}`}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link onClick={() => setPath("#contact")} href="#contact">
            <Button
              className={`-mr-2 h-[40px] w-[120px] border border-slate-100 bg-white text-[18px] text-primary-100 shadow-md hover:bg-slate-50 hover:bg-opacity-30 hover:text-primary-200 dark:border-secondary-100 dark:bg-black dark:text-secondary-100 dark:hover:bg-slate-50 dark:hover:bg-opacity-30 dark:hover:text-primary-200 ${path === "#contact" ? "text-primary-200 dark:bg-slate-50 dark:bg-opacity-30 dark:text-secondary-200" : ""}`}
            >
              Contact
            </Button>
          </Link>
        </li>
        <li>
          <Theme />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
