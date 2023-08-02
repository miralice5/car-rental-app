import React from "react";
import Button from "./Button/Button";
import carImage from "../../../assets/images/main-car.png"; // Replace with the actual path to your car image
import heroBg from "../../../assets/images/hero-bg.png";
const Home = () => {
  return (
      <section className="p-6">
        <div className="flex flex-wrap md:px-4">
          <div className="w-full md:w-1/2 leading-relaxed">
            <div className="md:mx-4">
              <h3 className="text-2xl text-gray-800 font-bold mb-4">Plan your trip now</h3>
              <h1 className="text-5xl text-gray-800 font-bold">
                Save{" "}
                <a className="text-red-500">big</a>
                {" "} with our car rental
              </h1>
              <p className=" my-4 text-gray-500">
                Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
              </p>
              <Button />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="md:mx-4 flex items-center justify-center relative">
              <img src={carImage} alt="Car" className="max-w-full h-auto z-10" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Home;
