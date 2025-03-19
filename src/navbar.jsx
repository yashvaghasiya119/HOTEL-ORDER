import { NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink className="navbar-link" to="/">Home</NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="navbar-link" to="/additem">Add Item</NavLink>
                </li>
            </ul>
        </div>
    );
}
