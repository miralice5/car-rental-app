import React from "react";

const SkillItem = (props) => {
    const { title } = props.skill;
    return (
        <div className="w-full md:w-1/2">
            <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                    <button className="hover:text-red-500 hover:bg-gray-50 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 px-10 py-3 rounded">
                        {title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;
