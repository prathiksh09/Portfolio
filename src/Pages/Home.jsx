import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  const skills = [
    {
      name: "HTML",
      image:
        "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg",
      description:
        "HTML stands for HyperText Markup Language. It is used to create the structure and content of a webpage using elements and tags.",
    },
    {
      name: "CSS",
      image:
        "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
      description:
        "CSS stands for Cascading Style Sheets. It controls colors, fonts, spacing, layouts, animations, and responsive design.",
    },
    {
      name: "JavaScript",
      image:
        "https://img.favpng.com/2/17/21/javascript-web-development-logo-png-favpng-ceaaGXGxjjeFv1hfcf44VMHjC.jpg",
      description:
        "JavaScript is a programming language used to make websites interactive and dynamic. It works together with HTML and CSS.",
    },
    {
      name: "React",
      image:
        "https://www.jotform.com/blog/wp-content/uploads/2017/01/react-js.png",
      description:
        "React is a frontend JavaScript library used to build reusable components and dynamic single-page applications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-700 ">
      <Navbar />

      {/* Hero section */}
      <section className="min-h-[650px] bg-gray-700 px-5 py-16 sm:px-8 md:px-12 lg:px-20 ">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Hero content */}
          <div className="w-full text-center text-white lg:w-1/2 lg:text-left">
            <p className="mb-3 text-lg font-medium text-gray-300 sm:text-xl">
              New Arrivals 2026
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              MERN FULLSTACK
            </h1>

            <h2 className="mt-2 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              DEVELOPMENT
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base lg:mx-0">
              Building modern, responsive, and user-friendly web applications
              using MongoDB, Express.js, React, and Node.js.
            </p>

            <button
              type="button"
              className="mt-7 rounded-lg border border-white px-6 py-3 text-sm font-semibold transition duration-300 hover:bg-white hover:text-gray-800"
            >
              Feedback Collection
            </button>
          </div>

          {/* Hero image */}
          <div className="flex w-full justify-center lg:w-1/2 pt-15">
            <img
              src="https://img.magnific.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Programmer working on a computer"
              className="h-[280px] w-full max-w-xl rounded-3xl border border-gray-500 object-cover shadow-2xl sm:h-[380px] lg:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* Skills section */}
      <section className="bg-gray-500 px-5 py-14 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              My Technical Skills
            </h2>

            <p className="mt-3 text-sm text-gray-200 sm:text-base">
              Technologies used to build modern web applications
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="overflow-hidden rounded-2xl border border-gray-300 bg-gray-600 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={skill.image}
                    alt={`${skill.name} logo`}
                    className="h-56 w-full object-cover transition duration-500 hover:scale-105 sm:h-60"
                  />
                </div>

                <div className="p-5">
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {skill.name}
                  </h3>

                  <p className="text-sm leading-7 text-gray-100">
                    {skill.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;