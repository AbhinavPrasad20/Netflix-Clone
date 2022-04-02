import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                width="200"
                alt="netflix logo"
            />

            <img
                className="nav__avatar"
                src="https://drive.google.com/uc?export=view&id=1ibkcDLUcluT6t7cN45aZq6HKIYOuzAoV"
                width="200"
                alt="netflix logo"
            />
        </div>
    );
}

export default Nav;
