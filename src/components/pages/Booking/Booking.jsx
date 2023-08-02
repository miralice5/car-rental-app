import React from "react";
import BookingItem from "./BookingItem";

const Booking = () => {
    return (
        <section className="shadow-lg rounded p-6 bg-gray-100">
            <div className="container mx-auto">
                <div className="mx-auto px-4">
                    <h2 className="text-3xl text-gray-800 font-bold mb-6">Book Your Car Now</h2>
                    <form className="space-y-4">
                        <BookingItem
                            label="Pickup Location"
                            type="text"
                            id="pickupLocation"
                            name="pickupLocation"
                            placeholder="Enter Pickup Location"
                        />
                        <BookingItem
                            label="Drop-off Location"
                            type="text"
                            id="dropOffLocation"
                            name="dropOffLocation"
                            placeholder="Enter Drop-off Location"
                        />
                        <div className="flex items-center">
                            <div className="w-1/2">
                                <BookingItem
                                    label="Pickup Date"
                                    type="date"
                                    id="pickupDate"
                                    name="pickupDate"
                                />
                            </div>
                            <div className="w-1/2 pl-4">
                                <BookingItem
                                    label="Drop-off Date"
                                    type="date"
                                    id="dropOffDate"
                                    name="dropOffDate"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full hover:text-red-500 hover:bg-gray-100 transition ease-out duration-200 text-md text-gray-50 font-bold bg-red-500 border-red-500 border-2 border-red-500 px-4 py-2 rounded"
                            >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
