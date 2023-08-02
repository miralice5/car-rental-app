import React from "react";

const SkillItem = (props) => {
    const { title } = props.skill;
    return (
        <div className="w-full md:w-1/2">
            <div className="mb-4 md:mx-4">
                <div className="flex justify-between items-center mb-1">
                    <button className="text-md text-gray-50 font-bold bg-yellow-500 px-10 py-4 rounded">
                        {title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SkillItem;
