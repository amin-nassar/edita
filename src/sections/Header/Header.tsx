import { useState } from "react";
import NavLink from "./NavLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const dot = <div className="size-1.5 rounded-full bg-p2 max-lg:hidden" />;
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="mx-auto max-w-[1252px] px-16 max-xl:px-10 max-lg:px-6 max-sm:px-4 flex h-14 items-center ">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/edita.svg" width={115} height={55} alt="Logo" />
        </a>

        <div
          className={`w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 ${
            isOpen ? "max-lg:opacity-0" : ""
          }`}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden max-md:px-4 sidebar-before">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="features" />
                  {dot}
                  <NavLink title="pricing" />
                </li>

                <li className="relative flex flex-1 items-center justify-center max-lg:hidden">
                  <img
                    src="images/edita.svg"
                    width={160}
                    height={55}
                    alt="Logo"
                  />
                </li>

                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="faq" />
                  {dot}
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />

              <img
                src="/images/bg-outlines-fill.png"
                alt="outline fill"
                width={960}
                height={380}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={toggleOpen}
        >
          {isOpen ? (
            <img
              src="/images/magic.svg"
              alt="Open"
              className="size-1/2 object-contain"
            />
          ) : (
            <img
              src="/images/close.svg"
              alt="Close"
              className="size-1/2 object-contain"
            />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
