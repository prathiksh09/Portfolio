import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-10">

        {/* Personal Info */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">PRATHIKSH</h1>
          <p className="text-gray-300 mt-2">prathiksh@gmail.com</p>
          <p className="text-gray-300">9741568081</p>

          <div className="flex justify-center md:justify-start gap-5 mt-5 text-2xl">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/prathiksh-undefined-bbb0a1421?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-3">LANGUAGES</h1>
          <p className="text-gray-300">HTML</p>
          <p className="text-gray-300">CSS</p>
          <p className="text-gray-300">React</p>
        </div>

        {/* Navigation */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-3">ABOUT</h1>

          <a href="/" className="block hover:text-orange-400 transition">
            Home
          </a>

          <a href="/About" className="block hover:text-orange-400 transition mt-2">
            About Us
          </a>

          <a href="/Contact" className="block hover:text-orange-400 transition mt-2">
            Contact Us
          </a>
        </div>
      </div>

    </Footer>
  );
};

export default Footer;