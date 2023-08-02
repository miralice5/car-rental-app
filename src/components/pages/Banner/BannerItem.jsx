import React from "react";

const BannerItem = (props) => {
const { title, description } = props.banner
    return (
        <div className=" w-full">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    );
};

export default BannerItem;
