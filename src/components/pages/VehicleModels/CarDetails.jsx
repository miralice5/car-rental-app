import React from "react";

const CarDetails = ({ car }) => {
    const { year, color, transmission } = car.description;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Car Details</h2>
            <table className="w-full table-auto border-collapse">
                <tbody>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100">
                        Year:
                    </td>
                    <td className="px-4 py-3">{year}</td>
                </tr>
                <tr className="border-b">
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-200">
                        Color:
                    </td>
                    <td className="px-4 py-3">{color}</td>
                </tr>
                <tr>
                    <td className="px-4 py-3 font-semibold text-gray-800 bg-gray-100">
                        Transmission:
                    </td>
                    <td className="px-4 py-3">{transmission}</td>
                </tr>
                {/* Add more rows for other details */}
                </tbody>
            </table>
        </div>
    );
};

export default CarDetails;
