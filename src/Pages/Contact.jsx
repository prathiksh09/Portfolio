import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact form data:", data);

    setData({
      name: "",
      email: "",
      website: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="px-4 pb-16 pt-24 sm:px-6 sm:pt-28 md:px-10 lg:px-20 lg:pt-32">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 rounded-3xl bg-white p-5 shadow-2xl sm:p-8 md:p-12 lg:flex-row lg:gap-16">
          {/* Contact information */}
          <section className="w-full lg:w-1/2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Get in touch
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Contact Me
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              I am committed to processing your information so I can contact
              you and discuss your project.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="mailto:prathiksh@gmail.com"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-gray-100"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <MdEmail className="text-2xl text-orange-500" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="break-all font-medium text-gray-800 sm:break-normal">
                    prathiksh@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-xl p-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <MdLocationOn className="text-2xl text-orange-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">Dharmasthala</p>
                </div>
              </div>

              <a
                href="tel:+919741568031"
                className="flex items-center gap-4 rounded-xl p-3 transition hover:bg-gray-100"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100">
                  <MdPhone className="text-2xl text-orange-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-800">+91 97415 68031</p>
                </div>
              </a>
            </div>
          </section>

          {/* Contact form */}
          <section className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Website
                </label>

                <input
                  id="website"
                  type="url"
                  name="website"
                  placeholder="https://yourwebsite.com"
                  value={data.website}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  value={data.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-500 p-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;