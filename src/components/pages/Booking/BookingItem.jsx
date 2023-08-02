import React from "react";

const BookingItem = (props) => {
    const { label, type, id, name, placeholder } = props;
    return (
        <div>
            <label htmlFor={id} className="block text-gray-800 font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder={placeholder}
            />
        </div>
    );
};

export default BookingItem;
