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
      rent: "$45",
      brand: "Audi",
      model: "A1 S-Line",
      year: "2012",
      color: "White",
      doors: "4 Door",
      transmission: "Manual",
      fuel: "Gasoline",
    },
  },
  {
    id: 2,
    name: "Dodge Challenger",
    image: Challenger,
    description: {
      rent: "$85",
      brand: "Dodge",
      model: "Challenger",
      year: "2020",
      color: "Red",
      doors: "2 Door",
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
];

const VehicleModels = () => {
  const [selectedCar, setSelectedCar] = useState(vehicleModelsData[0]);

  const handleCarSelect = (car) => {
    setSelectedCar(car);
  };

  return (
      <section className="px-4 py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex flex-col space-y-2">
              {vehicleModelsData.map((car) => (
                  <button
                      key={car.id}
                      className={`p-4 border border-gray-300 font-bold rounded ${
                          selectedCar.id === car.id ? "hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2" : ""
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
