import React from "react";
import ButtonItem from "./ButtonItem";

const buttonData = [
  {
    id: 1,
    text: "Book A Ride",
  },
];

const Button = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        {buttonData.map((button, id) => (
          <ButtonItem button={button} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Button;
