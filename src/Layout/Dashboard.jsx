import { CiBoxList, CiShoppingCart } from "react-icons/ci";
import { FaCalendar, FaHome, FaIcons, FaList, FaShoppingCart, FaSitemap, FaSortNumericDown } from "react-icons/fa";
import { FaExplosion } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { TiThMenu } from "react-icons/ti";
import { VscCodeReview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
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
                        <NavLink to="/dashboard/bookings">
                        <CiBoxList />
                            My Bookings
                        </NavLink>
                    </li>
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