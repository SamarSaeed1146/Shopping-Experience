// components/Footer.js
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Github } from "lucide-react";
import React from "react";
import logo from "@/public/shopping-logo.png";

const Footer = () => {
  const socialMedia = [
    { name: "Facebook", url: "#", icon: <Facebook /> },
    { name: "Instagram", url: "#", icon: <Instagram /> },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-samar-saeed-ab7347324/",
      icon: <Linkedin />,
    },
    { name: "YouTube", url: "#", icon: <Youtube /> },
    { name: "GitHub", url: "#", icon: <Github /> },
  ];

  return (
    <footer className="mt-auto bg-gray-100 pb-8 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center md:text-left">
            <div className="mb-4 flex justify-center items-center gap-4 md:justify-start">
              <Image
                src={logo}
                alt="Company Logo"
                width={400}
                height={400}
                className="h-14 w-auto"
              />
              <span className="text-lg font-bold md:text-xl md:font-extrabold">
                Shopping Experience
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media with Lucide Icons */}
          <div className="text-center md:text-right">
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>
            <div className="flex justify-center space-x-4 md:justify-end">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  className="strokeWidth: 2 h-8 w-8 text-blue-500 hover:animate-bounce hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.name}
                >
                  {React.cloneElement(platform.icon, {
                    className: "w-6 h-6 hover:scale-110 transition-transform",
                    strokeWidth: 1.5,
                  })}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
