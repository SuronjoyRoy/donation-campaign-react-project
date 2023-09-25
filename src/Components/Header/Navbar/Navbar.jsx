
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center py-6 shadow-lg">
                <h2>My logo</h2>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistice"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#ff444a] underline" : ""
                            }
                            >
                            Statistice
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;