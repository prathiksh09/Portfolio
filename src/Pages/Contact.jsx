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
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleDoc = () => {
    console.log(data);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="pt-30 px-6 md:px-16 lg:px-24 pb-16">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/">
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Contact 
            </h1>

            <p className="text-gray-600 text-lg mb-10 leading-8">
              We are committed to processing your information in order to contact<br></br>
              you and discuss your project.
            </p>

            <div className="space-y-6 text-lg">
              <div className="flex items-center gap-4">
                <MdEmail className="text-3xl text-orange-500" />
                <p>prathiksh@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <MdLocationOn className="text-3xl text-orange-500" />
                <p>Dharmasthala</p>
              </div>

              <div className="flex items-center gap-4">
                <MdPhone className="text-3xl text-orange-500" />
                <p>9741568031</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Website"
                name="website"
                value={data.website}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-orange-500"
              />

              <textarea
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={handleChange}
                rows="6"
                className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-orange-500 resize-none"
              ></textarea>

              <button
                onClick={handleDoc}
                className="w-full bg-orange-500 text-white p-4 rounded-xl hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;