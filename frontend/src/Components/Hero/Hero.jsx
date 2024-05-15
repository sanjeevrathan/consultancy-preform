import React, { useEffect, useState } from "react";
import hero_image from "../Assets/hero_image.png";
import Popular from "../Popular/Popular";

const Hero = () => {
  const [popular, setPopular] = useState([]);

  const fetchInfo = () => {
    fetch(`https://consutancy-backend.onrender.com/allproducts`)
      .then((res) => res.json())
      .then((data) => setPopular(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div
      className="hero relative min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-between px-6"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="hero-left text-white text-center md:text-left text-4xl md:text-6xl font-bold leading-tight py-16 md:py-24 px-8 z-10 md:w-1/2">
        <div className="md:absolute top-0 left-0 m-8 md:m-12">
          <p className="text-red-600">LISHANTH</p>
          <p>PET INDUSTRIES</p>
        </div>
      </div>
      <div className="md:absolute top-40 right-12 md:w-1/2">
        <Popular data={popular} />
      </div>
    </div>
  );
};

export default Hero;
