import React from "react";
import Skills from "./Skills/Skills";
import carImage from "../../../assets/images/main-car.png"; // Replace with the actual path to your car image

const About = () => {
  return (
      <section className="py-8">
        <div className="flex flex-wrap md:px-4">
          <div className="w-full md:w-1/2 leading-relaxed">
            <div className="md:mx-4">
              <h3 className="text-2xl text-gray-800 font-bold mb-4">Plan your trip now</h3>
              <h1 className="text-5xl text-gray-800 font-bold">
                Save{" "}
                <a className="text-yellow-500">big</a>
                {" "} with our car rental
              </h1>
              <p className=" my-4 text-gray-500">
                Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
              </p>
              <Skills />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:mx-4 flex items-center justify-center">
              <img src={carImage} alt="Car" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
