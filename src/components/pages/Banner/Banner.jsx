import React from "react";
import { SiTailwindcss } from "react-icons/si";
import BannerItem from "./BannerItem";

const serviceData = [

    {
        id: 1,
        title: "Let's Drive",
        description:
            "Whether you're hitting the open road, we've got you covered with our wide range of cars",
    },
];

const Banner = () => {
    return (
        <section className="pb-10">
            <div className="min-w-screen bg-black">
                <div className="container mx-auto">
                    <div className="flex flex-wrap -mx-4">
                {serviceData.map((banner, id) => (
                    <BannerItem banner={banner} key={id} />
                ))}
                    </div>
                </div>
                    </div>
        </section>
    );
};

export default Banner;
