import React from "react";

const CarModel = ({ car }) => {
    return (
        <div className="flex items-center justify-center h-96">
            <img src={car.image} alt={car.name} className="max-h-full max-w-full" />
        </div>
    );
};

export default CarModel;
