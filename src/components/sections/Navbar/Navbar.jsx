import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import About from "../../pages/About/About";
import VehicleModels from "../../pages/VehicleModels/VehicleModels";

const navbarData = [
    {
        id: 1,
        title: "Home",
        to: "/home",
    },
    {
        id: 2,
        title: "About",
        to: "/about",
    },
    {
        id: 3,
        title: "Vehicle Models",
        to: "/vehiclemodels",
    },
    {
        id: 4,
        title: "Testimonials",
        to: "/testimonials",
    },
    {
        id: 5,
        title: "Our Team",
        to: "/team",
    },    {
        id: 6,
        title: "Contact",
        to: "/contact",
    },
];

const Navbar = () => {
    return (
        <Router>
            <nav className="mb-3 py-4 z-10 sticky top-0 bg-white shadow rounded">
                <ul className="font-semibold flex justify-between items-center flex-wrap">
                    {/* Logo placeholder */}
                    <div className="pl-12 flex items-center">
                        <div className="text-gray-800 text-medium px-4">Logo</div>
                    </div>

                    {/* Centered navbar links */}
                    <div className="flex items-center">
                        {navbarData.map((el, id) => (
                            <LinkItem el={el} key={id} />
                        ))}
                    </div>

                    {/* Right side with "Sign In" and "Register" elements */}
                    <div className="pr-12 flex items-center">
                        <li className="m-3 lg:mx-5">
                            <NavLink
                                to="/signin" // Replace with your sign-in route
                                activeClassName="text-yellow-500"
                                className="text-gray-800 text-medium hover:text-yellow-500"
                            >
                                Sign In
                            </NavLink>
                        </li>
                        <li className="m-3 lg:mx-5">
                            <NavLink
                                to="/register" // Replace with your register route
                                activeClassName="text-yellow-500"
                                className="rounded-md bg-yellow-500 text-white px-4 py-2 hover:bg-yellow-600"
                            >
                                Register
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/vehiclemodels">
                    <VehicleModels />
                </Route>
                {/* Add your sign-in and register route components */}
                <Route path="/signin">
                    {/* Add your sign-in component here */}
                    <div>Sign In Component</div>
                </Route>
                <Route path="/register">
                    {/* Add your register component here */}
                    <div>Register Component</div>
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;

const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
        <li className="m-3">
            <NavLink
                to={to}
                activeClassName="text-yellow-500"
                className="text-gray-800 text-medium hover:text-yellow-500"
            >
                {title}
            </NavLink>
        </li>
    );
};
