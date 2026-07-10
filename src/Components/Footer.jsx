import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-left">

        {/* Personal Info */}
        <div>
          <h2 className="text-3xl font-bold">PRATHIKSH</h2>

          <p className="mt-4 text-gray-300 break-all">
            prathiksh@gmail.com
          </p>

          <p className="mt-2 text-gray-300">
            +91 97415 68031
          </p>

          <div className="mt-6 flex justify-center gap-5 text-2xl lg:justify-start">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-500"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/prathiksh-undefined-bbb0a1421"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-500"
            >
              <FaLinkedin />
            </a>

            
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sky-400"
            >
              <FaTwitter />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-gray-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Technologies</h2>

          <ul className="space-y-2 text-gray-300">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Quick Links</h2>

          <div className="flex flex-col gap-3">
            <Link
              to="/"
              className="transition hover:text-orange-400"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="transition hover:text-orange-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-orange-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

  
     
    </footer>
  );
};

export default Footer;