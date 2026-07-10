import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row bg-gray-700 w-full min-h-[600px] p-5 md:p-[30px]">
        <div className="w-full md:w-1/2 p-4 md:p-[10px] text-white flex flex-col justify-center">
          <h4 className="text-xl md:text-2xl pt-10 md:pt-[100px]">
            New Arrivals 2026
          </h4>

          <h1 className="text-4xl md:text-6xl font-bold">MERN FULLSTACK</h1>
          <h1 className="text-4xl md:text-6xl font-bold">DEVELOPMENT</h1>

          <button className="border h-[40px] w-[160px] mt-6 hover:bg-white hover:text-gray-700 transition">
            Feedback collection
          </button>
        </div>

        <div className="w-full md:w-1/2 p-4 md:p-[3%] flex justify-center items-center">
          <img
            className="border rounded-2xl w-full max-w-[500px]"
            src="https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80"
            alt="programmer"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center bg-gray-500 p-6">
        <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
          <img
            src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
            alt="HTML"
            className="border-2 h-64 w-64 rounded-2xl object-cover"
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
          <img
            src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png"
            alt="CSS"
            className="border-2 h-64 w-64 rounded-2xl object-cover"
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
          <img
            src="https://img.favpng.com/2/17/21/javascript-web-development-logo-png-favpng-ceaaGXGxjjeFv1hfcf44VMHjC.jpg"
            alt="JavaScript"
            className="border-2 h-64 w-64 rounded-2xl object-cover"
          />
        </div>

        <div className="transition-transform duration-300 hover:scale-105 flex justify-center">
          <img
            src="https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png"
            alt="React"
            className="border-2 h-64 w-64 rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-gray-600 p-6">
        <div className="p-4 border border-white rounded-2xl">
          <p className="text-amber-50">
            HTML stands for HyperText Markup Language. HyperText means text that
            contains links to other web pages. Markup Language means a language
            that uses tags to describe the structure of content. HTML is not a
            programming language because it does not perform calculations or
            make decisions. Instead, it is a markup language that defines the
            structure and content of a webpage.
          </p>
        </div>

        <div className="p-4 border border-white rounded-2xl">
          <p className="text-amber-50">
            CSS (Cascading Style Sheets) is a style sheet language used to
            control the appearance and layout of web pages. It works together
            with HTML by adding colors, fonts, spacing, animations, and
            responsive designs to web content.
          </p>
        </div>

        <div className="p-4 border border-white rounded-2xl">
          <p className="text-amber-50">
            JavaScript (JS) is a high-level, interpreted programming language
            used to make web pages interactive and dynamic. It works together
            with HTML and CSS to create modern websites and web applications.
          </p>
        </div>

        <div className="p-4 border border-white rounded-2xl">
          <p className="text-amber-50">
            React is a free and open-source frontend JavaScript library used for
            building dynamic and interactive user interfaces. It is useful for
            creating single-page applications efficiently.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
