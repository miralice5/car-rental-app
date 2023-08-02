import React from "react";

const Footer = () => {
    return (
        <footer className="bg-white py-2 absolute bottom-0 left-0 w-full">
            <div className="container px-4">
                <p className="text-sm text-gray-400 text-center">
                    Designed and Developed by
                    <a
                        className="text-purple-600"
                        href="https://www.singharaj.com/"
                        rel="nofollow"
                    >
                        {" "}
                        Singharaj Usai
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
