import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Links Section */}
        <div>
          <h3 className="font-light text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2 font-extralight text-md ">
            <li><a href="#" className="hover:text-red-600">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-red-600">Store Policy</a></li>
            <li><a href="#" className="hover:text-red-600">Payment Methods</a></li>
            <li><a href="#" className="hover:text-red-600">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-light text-2xl mb-4">Contact Us</h3>
          <p>Tel: <a href="tel:123-456-7890" className="hover:text-red-600">123-456-7890</a></p>
          <p>Email: <a href="mailto:info@mysite.com" className="hover:text-red-600">info@mysite.com</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaLinkedin size={24} /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaGithub size={24} /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebook size={24} /></a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="font-light text-2xl mb-4">Join Our Mailing List</h3>
          <p className="mb-2">Never miss an update!</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email*"
              className="px-4 py-2 border border-gray-300 rounded-md outline-none w-full"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; 2025 Nova Shop. Designed with ❤️ by{" "}
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 hover:underline"
        >
          SamtheDev
        </a>
      </div>
    </footer>
  );
}

export default Footer;
