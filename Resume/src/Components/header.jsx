import { MdOutlineContacts, MdOutlineMail } from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { useContext, useState } from "react";
import AppContext from "../store/ContextApi";
import Cv from "../assets/Cv.pdf";
import bluebackground from "../assets/bluebackground.jpeg";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { Navigation } = useContext(AppContext);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Cv;
    link.download = Cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="relative w-full">
        <header className="py-2 sm:py-2.5 md:py-3 lg:py-3">
          <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-4 lg:px-0">
            <div className="bg-white flex items-center justify-between gap-2 sm:gap-3 md:gap-x-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-[1.375rem] py-1.5 sm:py-2 md:py-2.5 pl-3 sm:pl-4 md:pl-5 lg:pl-5 pr-2 sm:pr-2.5 shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:justify-stretch lg:gap-x-12">
              <div className="flex items-center gap-3 sm:gap-6 md:gap-8 lg:gap-x-10">
                <a href="/" title="Home" className="shrink-0">
                  <img
                    className="h-6 sm:h-7 md:h-8 lg:h-8 rounded-md"
                    src={bluebackground}
                    alt="Logo"
                  />
                </a>
                <span className="hidden h-3 sm:h-3.5 md:h-4 w-px bg-neutral-300 lg:block"></span>
              </div>
              <nav className="hidden lg:block">
                <ul className="flex items-center">
                  {Navigation.map((tab, idx) => {
                    return (
                      <li key={idx}>
                        <a
                          href={tab.link}
                          className="px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-neutral-700 transition hover:text-neutral-600"
                        >
                          {tab.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-x-10 justify-self-end">
                <span className="hidden h-3 sm:h-3.5 md:h-4 w-px bg-neutral-300 lg:block"></span>
                <div className="flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-x-2">
                  <button
                    href="#"
                    className="hidden lg:flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 whitespace-nowrap"
                  >
                    <MdOutlineContacts className="text-base" />
                    <span>Contact Me</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open menu"
                    className="lg:hidden p-1 sm:p-1.5 md:p-2"
                    title="Open menu"
                  >
                    <svg
                      className="h-4 sm:h-5 md:h-6 text-slate-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
              {/* Navigation Links */}
              <nav className="space-y-2">
                {Navigation.map((tab, idx) => (
                  <a
                    key={idx}
                    href={tab.link}
                    className="block px-4 py-2.5 text-sm font-medium text-neutral-700 hover:bg-gray-100 rounded-lg transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-gray-200 my-3"></div>

              {/* Contact Button in Mobile Menu */}
              <button
                onClick={() => setMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-slate-700 transition"
              >
                <MdOutlineContacts className="text-base" />
                <span>Contact Me</span>
              </button>
            </div>
          </div>
        )}
        {/* section for hero content */}
        <div className="max-w-7xl flex items-center mt-3 sm:mt-4 md:mt-5 lg:mt-7 justify-center mx-auto w-full px-3 sm:px-4 md:px-4 lg:px-0 xl:px-0">
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full pb-12 sm:pb-16 md:pb-20 lg:pb-0 lg:flex-col lg:items-center lg:text-center lg:w-full ">
            {/*Hero Badge*/}
            <div className="flex justify-center lg:justify-center">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 md:gap-2 capitalize rounded-full text-xs sm:text-xs md:text-sm lg:text-sm font-medium whitespace-nowrap shadow-[0_2px_10px_0px_rgba(0,0,0,0.15)] bg-white text-neutral-700 px-2 sm:px-2.5 md:px-2.5 py-0.5 sm:py-1">
                <span className="bg-blue-400 rounded-full w-1 h-1 sm:w-1.5 sm:h-1.5 md:size-2 lg:size-2" />
                Available for work
              </div>
            </div>

            {/* Hero Titles */}
            <div className="flex flex-col  lg:items-center gap-1 sm:gap-2 md:gap-2 lg:gap-3 ">
              <h1 className="text-2xl  capitalize sm:text-3xl md:text-4xl lg:text-7xl font-semibold tracking-tight text-black ">
                Muhammad Waqar ul haq
              </h1>
              <p className="text-sm sm:text-base md:text-lg  lg:text-3xl capitalize font-medium text-black/80">
                A data entry operator
              </p>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-x-6 w-full sm:w-auto ">
              <button
                onClick={() => (window.location = "mailto:waqarulhaq617@gmail.com")}
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full sm:w-auto"
              >
                <MdOutlineMail className="text-base" /> Send Email
              </button>

              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#edede9] px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-[#d6ccc2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-full sm:w-auto"
              >
                <LiaDownloadSolid className="text-base" /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
