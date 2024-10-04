"use client";

import clsx from "clsx";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";

const NavLink = ({ title }) => (
  <LinkScroll
    className="base-bold text-p5 uppercase
   transition-colors duration-500 cursor-pointer
    hover:text-p1 max-lg:my-4 max-lg:h-5"
  >
    {title}
  </LinkScroll>
);

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container justify-between flex h-14 items-center max-lg:px-5 ">
        {/* logo mobile */}
        <a href="/" className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="images/zoot-logo.svg " alt="logo" width={115} height={55} />
        </a>

        {/*  menu */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          {/* wrap */}
          <div
            className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen 
          max-lg:p-6 max-lg:overflow-hidden max-md:px-4 sidebar-before "
          >
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  {/* desktop logo */}
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/zoot-logo.svg"
                      alt="logo "
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title={"Faq"} />
                  <div className="dot" />
                  <NavLink title="Download" />
                </li>
              </ul>
            </nav>

            <div
              className="lg:hidden block absolute top-1/2 left-0 w-[960px]
             h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90"
            >
              <img
                src="/images/bg-outlines.svg"
                alt="outline "
                width={960}
                height={380}
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                alt="outline "
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* hamburger */}
        <button
          onClick={() => setIsOpen((prevstate) => !prevstate)}
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="menu icon"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
