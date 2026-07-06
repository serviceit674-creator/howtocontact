import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full bg-[#193315]">
      <div className="flex flex-col lg:flex-row">
        {/* LEFT SECTION */}
        <div className="lg:w-10/12 w-full">
          <div className="text-white text-sm py-2 px-4 overflow-hidden">
            {/* marquee is deprecated but keeping SAME behavior */}
            <marquee direction="left">
              Our business hours are Monday to Friday from 8.00 am to 7.00 pm
              MST.
            </marquee>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-2/12 w-full sm:pb-0 pb-4">
          <div className="flex justify-center lg:justify-end items-center h-full px-4">
            <ul className="flex gap-4 items-center text-white">
              <li>
                <a
                  href="https://www.facebook.com/"
                  aria-label="Facebook"
                  title="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1877F2]"
                >
                  <FaFacebookF aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/"
                  title="Twitter"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#1DA1F2]"
                >
                  <FaTwitter aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                  title="LinkedIn"
                  className="hover:text-[#0A66C2]"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>

              <li className="flex items-center gap-1 bg-red-600 px-2 py-1 rounded">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our YouTube channel"
                  title="YouTube"
                  className="flex items-center gap-1"
                >
                  <FaYoutube aria-hidden="true" />
                  <span className="text-xs font-medium">YouTube</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
