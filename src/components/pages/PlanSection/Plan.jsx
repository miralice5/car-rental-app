import React from "react";
import { FaCarSide, FaCar, FaTools } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import PlanItem from "./PlanItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCarSide />,
    title: "Variety Of Cars",
    description:
      "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs",
  },
  {
    id: 1,
    icon: <FaTools />,
    title: "Reliable",
    description:
        "Our vehicles have been inspected and maintained, and passes all road safety requirements",
  },
  {
    id: 1,
    icon: <FaCar />,
    title: "Let's Drive",
    description:
        "Whether you're hitting the open road, we've got you covered with our wide range of cars",
  },
];

const Plan = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap">
        {serviceData.map((plan, id) => (
          <PlanItem plan={plan} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Plan;
