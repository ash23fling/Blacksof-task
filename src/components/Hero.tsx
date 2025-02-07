import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="h-[925px] bg-gray-400 flex flex-col items-center justify-center text-center text-white space-y-4 px-4 transition duration-300 transform hover:scale-105">
      <p className="text-xl animate-bounce">Performance in motion</p>
      <h1 className="text-4xl font-bold">Soft Trims and NVH Solutions</h1>
      <p className="text-lg">for seamless rides</p>
    </section>
  );
};

export default Hero;
