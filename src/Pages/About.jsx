import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Prathi from "../assets/Prathi.jpeg";

const About = (props) => {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-blue-50 min-h-screen">
      <Navbar />

      <div className="pt-32 px-6 md:px-16 lg:px-24 pb-16">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-16">
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              src={Prathi}
              alt="Profile"
              className="
                w-[280px]
                h-[380px]
                md:w-[360px]
                md:h-[500px]
                object-cover
                rounded-3xl
                shadow-2xl
                border-4
                border-white
                transition-all
                duration-500
                hover:scale-105
                hover:shadow-blue-400
                cursor-pointer
              "
            />
          </div>

          <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-3xl p-8">
            <div className="space-y-3 text-lg md:text-xl">
              <p>
                <b>Name :</b> {props.name}
              </p>
              <p className="break-words">
                <b>Email :</b> {props.email}
              </p>
              <p>
                <b>Phone :</b> {props.phone}
              </p>
              <p>
                <b>Address :</b> {props.address}
              </p>
              <p>
                <b>Course :</b> {props.course}
              </p>
              <p>
                <b>Year :</b> {props.year}
              </p>
            </div>

            <p className="mt-8 text-base md:text-lg leading-8 text-gray-700">
              A passionate MERN Stack Developer who enjoys building responsive,
              user-friendly, and modern web applications. I love learning new
              technologies and solving real-world problems through clean and
              efficient code.
            </p>

            <button
              className="
                mt-8
                bg-blue-600
                text-white
                px-8
                py-3
                rounded-full
                shadow-lg
                hover:bg-orange-500
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Get To Know Me
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;