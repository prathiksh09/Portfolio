import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Prathi from "../assets/Prathi.jpeg";

const About = (props) => {
  const details = [
    { label: "Name", value: props.name },
    { label: "Email", value: props.email },
    { label: "Phone", value: props.phone },
    { label: "Address", value: props.address },
    { label: "Course", value: props.course },
    { label: "Year", value: props.year },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50">
      <Navbar />

      <main className="px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:px-10 lg:px-20 lg:pt-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Profile image */}
          <div className="flex w-full justify-center lg:w-1/2">
            <img
              src={Prathi}
              alt="Prathiksh profile"
              className="
                h-[360px]
                w-full
                max-w-[280px]
                rounded-3xl
                border-4
                border-white
                object-cover
                shadow-2xl
                transition-all
                duration-500
                hover:scale-[1.03]
                hover:shadow-blue-300
                sm:h-[430px]
                sm:max-w-[330px]
                md:h-[500px]
                md:max-w-[380px]
              "
            />
          </div>

          {/* About details */}
          <section className="w-full rounded-3xl bg-white p-5 shadow-xl sm:p-8 lg:w-1/2 lg:p-10">
            <div className="mb-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </p>

              {/* <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
                MERN Stack Developer
              </h1> */}
            </div>

            <div className="space-y-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col border-b border-gray-200 pb-3 sm:flex-row sm:gap-3"
                >
                  <span className="font-semibold text-gray-900 sm:w-28">
                    {detail.label}:
                  </span>

                  <span className="break-all text-gray-700 sm:break-words">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-sm leading-7 text-gray-700 sm:text-base md:text-lg md:leading-8">
              I am a passionate MERN Stack Developer who enjoys building
              responsive, user-friendly, and modern web applications. I love
              learning new technologies and solving real-world problems through
              clean and efficient code.
            </p>

            <button
              type="button"
              className="
                mt-8
                w-full
                rounded-full
                bg-blue-600
                px-7
                py-3
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-orange-500
                sm:w-auto
              "
            >
              Get To Know Me
            </button>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;