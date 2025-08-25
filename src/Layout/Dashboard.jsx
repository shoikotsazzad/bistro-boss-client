import { CiBoxList, CiShoppingCart } from "react-icons/ci";
import { FaBook, FaCalendar, FaHome, FaIcons, FaList, FaShoppingCart, FaSitemap, FaSortNumericDown, FaUsers, FaUtensils } from "react-icons/fa";

import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import { VscCodeReview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    const [cart] = useCart();

    //get Admin value from the database
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addIems">
                                    <FaUtensils></FaUtensils>
                                    AddItems
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/dashboard/manageItems">
                                    <FaList></FaList>
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/bookings">
                                    <FaBook></FaBook>
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-white text-orange-500 rounded-lg px-2" // Active link style
                                            : "hover:bg-orange-300 rounded-lg px-2"      // Normal hover style
                                    }>
                                    <FaUsers></FaUsers>
                                    All Users
                                </NavLink>
                            </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar></FaCalendar>
                                        Reservation
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <VscCodeReview />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myBookings">
                                        <CiBoxList />
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }
                    {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <IoHomeOutline />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <TiThMenu />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <CiShoppingCart />
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <LuContact />
                            Contact
                        </NavLink>
                    </li>


                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;