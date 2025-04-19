import { useState } from "react";
import NavLink from "./NavLink";
import { useScroll } from "@/hooks";
import { Link } from "react-scroll";
import Container from "@/components/Container";

const Header = () => {
  const scrolledDown = useScroll();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);
  const closeHeader = () => setIsOpen(false);

  const dot = <div className="bg-p2 size-1.5 rounded-full max-lg:hidden" />;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 max-lg:py-4 ${
        scrolledDown ? "bg-black-100 py-2 backdrop-blur-[8px]" : "py-10"
      }`}
    >
      <Container className="flex h-14 items-center">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img
            src="/edita/images/edita.svg"
            width={115}
            height={55}
            alt="Logo"
          />
        </a>

        <div
          className={`max-lg:bg-s2 w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full ${
            isOpen ? "" : "max-lg:hidden"
          }`}
        >
          <div className="sidebar-before max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="features" onClick={closeHeader} />
                  {dot}
                  <NavLink title="pricing" onClick={closeHeader} />
                </li>

                <li className="relative flex flex-1 items-center justify-center max-lg:hidden">
                  <Link
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className="cursor-pointer transition-transform duration-500 max-lg:hidden"
                  >
                    <img
                      src="/edita/images/edita.svg"
                      width={160}
                      height={55}
                      alt="Logo"
                    />
                  </Link>
                </li>

                <li className="relative flex flex-1 items-center justify-between max-lg:flex-col max-lg:items-start">
                  <NavLink title="faq" onClick={closeHeader} />
                  {dot}
                  <NavLink title="download" onClick={closeHeader} />
                </li>
              </ul>
            </nav>

            <div className="absolute top-1/2 left-0 block h-[380px] w-[960px] translate-x-[-290px] -translate-y-1/2 rotate-90 lg:hidden">
              <img
                src="/edita/images/bg-outlines.svg"
                alt="outline"
                width={960}
                height={380}
                className="relative z-2"
              />

              <img
                src="/edita/images/bg-outlines-fill.png"
                alt="outline fill"
                width={960}
                height={380}
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>

        <button
          className="border-s4/25 z-2 flex size-10 cursor-pointer items-center justify-center rounded-full border-2 lg:hidden"
          onClick={toggleOpen}
        >
          {isOpen ? (
            <img
              src="/edita/images/close.svg"
              alt="Close"
              className="size-1/2 object-contain"
            />
          ) : (
            <img
              src="/edita/images/magic.svg"
              alt="Open"
              className="size-1/2 object-contain"
            />
          )}
        </button>
      </Container>
    </header>
  );
};

export default Header;
