import React from "react";
import { BiMap, BiEnvelope, BiPhone } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className="mx-auto px-6 py-8">
      <h1 className="text-6xl sm:text-8xl text-center uppercase font-semibold text-purple-heart-950 mb-8">
        Contact Us
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-12">
        <div className="bg-gradient-to-br from-purple-heart-800 via-purple-heart-950 to-transparent rounded-xl shadow-md p-6 w-full md:w-96">
          <h2 className="text-2xl font-semibold text-purple-heart-300 mb-4">
            Contact Form
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-purple-heart-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-heart-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b border-purple-heart-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-heart-300"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border-b border-purple-heart-500 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-purple-heart-300"
            ></textarea>
            <button type="submit" className="button">
              Send Message
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-purple-heart-800 via-purple-heart-950 to-transparent rounded-xl shadow-md p-6 w-full md:w-96">
          <h2 className="text-2xl font-semibold text-purple-heart-300 mb-4">
            Contact Information
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <BiMap className="w-6 h-6 text-purple-heart-200" />
              <p className="text-purple-heart-200">
                123, Street Name, City, State, India - 123456
              </p>
            </div>
            <div className="flex items-center gap-4">
              <BiEnvelope className="w-6 h-6 text-purple-heart-200" />
              <p className="text-purple-heart-200">info@example.com</p>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="w-6 h-6 text-purple-heart-200" />
              <p className="text-purple-heart-200">+91 123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
