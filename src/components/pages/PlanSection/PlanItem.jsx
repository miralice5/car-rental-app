import React from "react";

const PlanItem = (props) => {
  const { icon, title, description } = props.plan;
  return (
    <div className="w-full p-2 lg:w-1/3">
      <div className="my-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-red-100 text-red-600 transition duration-200 group-hover:bg-red-600 group-hover:text-white">
          {icon}
        </div>
        <h2 className="text-2xl font-medium text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default PlanItem;
