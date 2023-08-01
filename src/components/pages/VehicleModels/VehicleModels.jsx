import React from "react";
import { FaCode, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import VehicleModelsItem from "./VehicleModelsItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

const VehicleModels = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <VehicleModelsItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default VehicleModels;
