import { NavLink } from "react-router-dom";
import yousra from "../images/yousra.jpg";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const styles = {
  heading: {
    background: "#dcbc95",
  },
};

export default function Header() {
  const inActive =
    "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700";
  const activeLink =
    "inline-flex items-center border-b-2 border-rose-950 px-1 pt-1 text-sm font-medium text-gray-900";
  const activeLinkMobile =
    "block border-l-4 border-rose-900 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-gray-900";
  const inActiveMobile =
    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700";

  return (
    <Disclosure as="nav" style={styles.heading}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <div className="min-w-0 flex-1">
                  <h2 className="text-3xl font-bold font-serif leading-7 text-gray-900 sm:truncate    ">
                    <NavLink to="/about">Yousra Kamal</NavLink>
                  </h2>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <NavLink
                      to="/about"
                      className="relative flex rounded-full bg-white text-sm  "
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>

                      <img
                        className="h-8 w-8 rounded-full"
                        src={yousra}
                        alt="my picture"
                      />
                    </NavLink>
                  </div>
                </Menu>
              </div>
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => {
                      return isActive ? activeLink : inActive;
                    }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) => {
                      return isActive ? activeLink : inActive;
                    }}
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => {
                      return isActive ? activeLink : inActive;
                    }}
                  >
                    Contact
                  </NavLink>
                  <NavLink
                    to="/resume"
                    className={({ isActive }) => {
                      return isActive ? activeLink : inActive;
                    }}
                  >
                    Resume
                  </NavLink>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return isActive ? activeLinkMobile : inActiveMobile;
                }}
              >
                About
              </NavLink>

              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return isActive ? activeLinkMobile : inActiveMobile;
                }}
              >
                Portfolio
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return isActive ? activeLinkMobile : inActiveMobile;
                }}
              >
                Contact
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) => {
                  return isActive ? activeLinkMobile : inActiveMobile;
                }}
              >
                Resume
              </NavLink>
            </div>

            <div className="border-t border-gray-200 pb-3 pt-4"></div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
