"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelopeOpen,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-white pt-14 pb-6 font-sans text-gray-700">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 xl:gap-20">

          {/* LEFT */}
          <div className="lg:col-span-4">

            {/* LOGO */}
            <div className="mb-6 flex items-center gap-3">
              <img
                src="/Logo.jpg"
                alt="HowToContact Logo"
                className="h-12 w-auto"
              />

              <h2 className="text-3xl font-medium text-gray-900">
                HowToContact
              </h2>
            </div>

            {/* ABOUT */}
            <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500">
              We are an experienced information technology consulting
              service provider. We offer uninterrupted IT solutions to
              all types of businesses. Contact us for further information.
            </p>

            {/* ADDRESS */}
            <div className="space-y-5">

              {/* ADDRESS ITEM */}
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-lg text-[#193315]" />

                <div>
                  <h6 className="mb-1 font-semibold text-gray-800">
                    Address
                  </h6>

                  <p className="text-sm leading-relaxed text-gray-500">
                    12031 NE 102 St, Kirkland,
                    <br />
                    Washington, USA
                  </p>
                </div>
              </div>

              {/* EMAIL ITEM */}
              <div className="flex items-start gap-3">
                <FaEnvelopeOpen className="mt-1 text-lg text-[#193315]" />

                <div>
                  <h6 className="mb-1 font-semibold text-gray-800">
                    Email
                  </h6>

                  <a
                    href="mailto:info@howtocontact.live"
                    className="text-sm text-gray-500 transition hover:text-[#193315]"
                  >
                    info@howtocontact.live
                  </a>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-8">
              <span className="mb-4 block text-xs font-semibold uppercase tracking-wider text-gray-400">
                Connect With Us
              </span>

              <div className="flex items-center gap-3">
                {[
                  {
                    icon: <FaFacebookF />,
                    url: "https://www.facebook.com/",
                  },

                  {
                    icon: <FaTwitter />,
                    url: "https://www.x.com/",
                  },

                  {
                    icon: <FaLinkedinIn />,
                    url: "https://www.linkedin.com/",
                  },

                  {
                    icon: <FaYoutube />,
                    url: "https://www.youtube.com/",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 hover:bg-[#193315] hover:text-white"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT LINKS */}
          <div className="lg:col-span-8">

            <div className="grid h-full grid-cols-1 gap-12 sm:grid-cols-2 lg:gap-20 lg:pl-16">

              {/* USEFUL LINKS */}
              <div className="flex flex-col">

                <h4 className="relative mb-7 inline-block pb-3 text-xl font-semibold text-[#071405] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-14 after:bg-[#2E5628]">
                  Useful Links
                </h4>

                <ul className="space-y-4 text-[15px] text-gray-500">
                  {[
                    {
                      name: "Home",
                      path: "/",
                    },

                    {
                      name: "Software",
                      path: "/services/software",
                    },

                    {
                      name: "Browser Solution",
                      path: "/services/browser-solution",
                    },

                    {
                      name: "Digital Marketing",
                      path: "/services/digital-marketing",
                    },

                    {
                      name: "Printer Solution",
                      path: "/services/printer-solution",
                    },

                    {
                      name: "Pc / Laptop Solution",
                      path: "/services/pc-laptop-solution",
                    },

                    {
                      name: "Contact Us",
                      path: "/contact",
                    },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-[#2E5628]"
                      >
                        <span className="h-[1px] w-0 bg-[#2E5628] transition-all duration-300 group-hover:w-3" />

                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* POPULAR SERVICES */}
              <div className="flex flex-col">

                <h4 className="relative mb-7 inline-block pb-3 text-xl font-semibold text-[#071405] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-14 after:bg-[#2E5628]">
                  Popular Services
                </h4>

                <ul className="space-y-4 text-[15px] text-gray-500">
                  {[
                    {
                      name: "Printer Solution",
                      path: "/services/printer-solution",
                    },

                    // {
                    //   name: "Email Solution",
                    //   path: "/services/email-solution",
                    // },

                    {
                      name: "Browser Solution",
                      path: "/services/browser-solution",
                    },

                    {
                      name: "PC & Laptop Solution",
                      path: "/services/pc-laptop-solution",
                    },

                    {
                      name: "About Us",
                      path: "/about",
                    },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.path}
                        className="group inline-flex items-center gap-2 transition-all duration-300 hover:text-[#2E5628]"
                      >
                        <span className="h-[1px] w-0 bg-[#2E5628] transition-all duration-300 group-hover:w-3" />

                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-14 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-center text-sm text-gray-400 md:text-left">
              © 2026 HowToContact. All Rights Reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;