import React, { useState } from "react";
import CarModel from "./CarModel";
import AudiS1 from "../../../assets/images/audi-s1.png";
import Challenger from "../../../assets/images/Red-Dodge-Challenger-PNG-Pic.png";
import CarDetails from "./CarDetails";

const vehicleModelsData = [
  {
    id: 1,
    name: "Audi A1 S-Line",
    image: AudiS1,
    description: {
      year: "2012",
      color: "White",
      transmission: "Manual",
      // Add more details as needed
    },
  },
  {
    id: 2,
    name: "Dodge Challenger",
    image: Challenger,
    description: {
      year: "2020",
      color: "Red",
      transmission: "Automatic",
      // Add more details as needed
    },
  },
  // Add more car models
];

const VehicleModels = () => {
  const [selectedCar, setSelectedCar] = useState(vehicleModelsData[0]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
      <section className="py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-4">
              {vehicleModelsData.map((car) => (
                  <button
                      key={car.id}
                      className={`p-4 border border-gray-300 rounded-md ${
                          selectedCar.id === car.id ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => handleCarSelect(car)}
                  >
                    {car.name}
                  </button>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <CarModel car={selectedCar} />
          </div>
          <div className="md:col-span-1">
            <CarDetails car={selectedCar} />
          </div>
        </div>
      </section>
  );
};

export default VehicleModels;
