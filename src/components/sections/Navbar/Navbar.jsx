import React from "react";
import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Switch,
} from "react-router-dom";
import About from "../../pages/About/About";
import Service from "../../pages/Service/Service";

const navbarData = [
    {
        id: 1,
        title: "About",
        to: "/about",
    },
    {
        id: 2,
        title: "Services",
        to: "/services",
    },
];

const Navbar = () => {
    return (
        <Router>
            <nav className="md:mx-8 mb-3 px-6 py-2 z-10 sticky top-0 bg-white shadow rounded">
                <ul className="flex flex-wrap">
                    {navbarData.map((el, id) => (
                        <LinkItem el={el} key={id} />
                    ))}
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/services">
                    <Service />
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
                activeClassName="text-purple-600"
                className="text-gray-800 text-medium hover:text-purple-600"
            >
                {title}
            </NavLink>
        </li>
    );
};
