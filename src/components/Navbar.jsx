"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [solitaireOpen, setSolitaireOpen] = useState(false);




  return (
    <div className="w-full bg-white shadow-md sticky top-0 z-[999999]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">
        {/* Logo */}
        <div className="logo">
          <Link href="/" className="flex items-center gap-2">

            <Image
              src="/Logo.jpg"
              alt="HowToContact Logo"
              width={40}
              height={40}
              priority
            />

            <span className="text-2xl sm:text-3xl text-gray-900 font-medium">
              HowToContact
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="font-medium hover:text-[#457C3C] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="font-medium hover:text-[#457C3C] transition"
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <button className="flex items-center gap-1 font-medium hover:text-[#457C3C] transition">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              <ul className="absolute top-full right-6 hidden group-hover:block bg-white shadow-xl rounded-xl w-92 py-2 z-50">

                <li>
                  <Link
                    href="/services/printer-solution"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    Printer Solution
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/browser-solution"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    Browser Solution
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/pc-laptop-solution"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    PC / Laptop Solution
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/software"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    Software
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/digital-marketing"
                    className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    Digital Marketing
                  </Link>
                </li>

                {/* Nested Dropdown */}
                <li className="relative">
                  <div className="group/solitaire">
                    <button className="flex items-center justify-between w-full px-5 py-3 text-sm hover:bg-gray-100">
                      Solitaire
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/solitaire:rotate-270" />
                    </button>

                    <ul className="absolute left-full top-0 hidden group-hover/solitaire:block bg-white shadow-xl rounded-xl w-64 py-2 z-50 ml-0.5">
                      <li>
                        <Link
                          href="/services/solitaire/solitaire-login"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Account & Login Issues
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/solitaire/solitaire-payment"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Solitaire Payment Issues
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/solitaire/solitaire-website"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Solitaire Website/App Issues
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/services/solitaire/solitaire-customer-service"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Solitaire Customer Service Issues
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/solitaire/solitaire-technical-support"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Solitaire Technical Support Issues
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services/solitaire/solitaire-refund"
                          className="block px-5 py-3 hover:bg-gray-100"
                        >
                          Solitaire Return & Refund Issues
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/blog"
                className="font-medium hover:text-[#457C3C] transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="font-medium hover:text-[#457C3C] transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <div
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
          <span className="w-6 h-0.5 bg-black rounded"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-5 border-t">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                About Us
              </Link>
            </li>

            {/* Mobile Services */}
            <li>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="w-full text-left flex items-center gap-1 font-medium"
              >
                Services
                <ChevronDown className="text-[14px] mt-[2px]" />
              </button>

              {serviceOpen && (
                <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-gray-600">
                  <li>
                    <Link
                      href="/services/printer-solution"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      Printer Solution
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/browser-solution"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      Browser Solution
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/pc-laptop-solution"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      Pc / Laptop Solution
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/software"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      Software
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/services/digital-marketing"
                      onClick={() => {
                        setMobileOpen(false);
                        setServiceOpen(false);
                      }}
                    >
                      Digital Marketing
                    </Link>
                  </li>

                  {/* ------------------------------- Nested Mobile Services Dropdown for Solitaire ------------------------------- */}
                  <li>
                    <button
                      onClick={() => setSolitaireOpen(!solitaireOpen)}
                      className="w-full -ml-4 flex items-center gap-1 text-gray-900 font-medium"
                    >
                      Solitaire
                      <ChevronDown className="text-[14px] mt-[2px]" />
                    </button>

                    {solitaireOpen && (
                      <ul className="ml-2 mt-2 flex flex-col gap-2 text-gray-600">
                        <li>
                          <Link
                            href="/services/solitaire/solitaire-login"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Account & Login Issues
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/solitaire/solitaire-payment"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Solitaire Payment Issues
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/solitaire/solitaire-website"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Solitaire Website/App Issues
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/solitaire/solitaire-customer-service"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Solitaire Customer Service Issues
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/solitaire/solitaire-technical-support"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Solitaire Technical Support Issues
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/solitaire/solitaire-refund"
                            onClick={() => {
                              setMobileOpen(false);
                              setServiceOpen(false);
                              setSolitaireOpen(false);
                            }}
                          >
                            Solitaire Return & Refund Issues
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>



            <li>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
