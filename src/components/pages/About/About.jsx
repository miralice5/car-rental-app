import React from "react";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Texts Here</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima
              amet accusantium provident, dignissimos corporis reprehenderit
              numquam nobis ex dolore? Maxime veritatis aliquam amet inventore
              recusandae nulla incidunt tenetur repellat voluptatibus molestias
              quas deleniti quia vel officia veniam expedita exercitationem
              modi, maiores saepe ut dolorum. Voluptas optio laudantium pariatur
              aperiam!
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
