import React from "react";
import machinery_image from "../Assets/machinery.JPG";
import storage_image from "../Assets/storage_unit.JPG";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="container flex flex-col md:flex-row justify-center items-center bg-white shadow-xl rounded-xl p-8">
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0 w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-6 text-red-500">About Us</h1>
          <div className="mb-8">
            <p className="text-gray-800">
              We are the leading manufacturer of plastic preform tubes and caps
              for various industries. We offer high quality durable and
              eco-friendly products that meet the needs of our customers.
            </p>
            <h2 className="text-xl font-bold mb-2 mt-6">Machinery Work</h2>
            <p className="text-gray-700">
              We have over 10 years of experience in plastic preform industry
              and we use advanced technology and machinery to produce our
              products. Our preform caps and tubes are suitable for packaging
              beverages, cosmetics, pharmaceuticals, and other products that
              require airtight and hygienic containers.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 mt-6">Storage Unit</h2>
            <p className="text-gray-700">
              At Preform Industries, we're dedicated to revolutionizing the pet
              industry with innovation and sustainability. Our cutting-edge
              facility and skilled team ensure top-quality preforms for various
              packaging needs. Committed to environmental responsibility, we
              prioritize sustainability in every aspect of our operations. Join
              us as we shape the future of pet packaging solutions.
            </p>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/4">
          <img
            src={machinery_image}
            alt="Machinery"
            className="w-full h-auto rounded-lg shadow-lg mb-4 md:mb-4 md:mr-4 object-cover"
          />
          <img
            src={storage_image}
            alt="Storage"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
