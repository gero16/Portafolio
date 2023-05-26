import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { Context } from "../../context/context";


const NavBar = () => {
    return (
        <ul className="lista-navbar">
            <li className="p-2">
                <NavLink to="/contact">
                    Contacto
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink to="/">
                    Sobre Mi
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink to="/">
                    Trabajos
                </NavLink>
            </li>
            <li className="p-2">
                <NavLink to="/">
                    Inicio
                </NavLink>
            </li>
        </ul>
    )
}
export default NavBar