import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
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
];

const Navbar = () => {
    return (
        <Router>
            <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
                <ul className="justify-center flex flex-wrap">
                    {navbarData.map((el, id) => (
                        <LinkItem el={el} key={id} />
                    ))}
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <About/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/vehiclemodels">
                    <VehicleModels />
                </Route>
            </Switch>
        </Router>
    );
};

export default Navbar;

const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
        <li className="m-3 lg:mx-5">
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
