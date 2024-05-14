// import React from "react";
// import arrow_icon from "../Assets/arrow.png";
// import hero_image from "../Assets/hero_image.png";

// const Hero = () => {
//   return (
//     <div
//       className="hero relative min-h-screen bg-cover bg-center flex items-center justify-between px-6"
//       style={{ backgroundImage: `url(${hero_image})` }}
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
//       <div className="hero-left text-white text-left text-4xl md:text-6xl font-bold leading-tight py-16 md:py-24 px-8 z-10">
//         <div>
//           <p>LISHANTH</p>
//           <p>PET INDUSTRIES</p>
//         </div>
//         <div className="hero-latest-btn flex items-center justify-center bg-red-600 text-white rounded-full px-2 py-2 mt-8 text-sm md:text-md">
//           <button className="py-2">Explore Now</button>
//           <img src={arrow_icon} alt="" className="w-4 h-auto ml-1" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
import React from "react";
// import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div
      className="hero relative min-h-screen bg-cover bg-center flex items-center justify-between px-6"
      style={{ backgroundImage: `url(${hero_image})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
      <div className="hero-left text-white text-left text-4xl md:text-6xl font-bold leading-tight py-16 md:py-24 px-8 z-10">
        <div className="absolute top-0 left-0 m-8 md:m-12">
          <p className="text-red-600">LISHANTH</p>
          <p>PET INDUSTRIES</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
