import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-center p-16 mt-auto">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        {/* Left section */}
        <p className="text-sm mb-4 sm:mb-0">
          &copy; 2025 Nova Shop. Designed with ❤️ by {""}
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            SamtheDev
          </a>
        </p>

        {/* Right section - social icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
