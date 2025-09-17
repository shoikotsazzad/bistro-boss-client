import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartPlus, FaBars, FaTimes } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/' className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Home</Link></li>
        <li><Link to="/contact" className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Contact US</Link></li>
        <li><Link to='/menu' className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Our Menu</Link></li>
        <li><Link to='/order/salad' className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Order Food</Link></li>
        {
            user && isAdmin && <li><Link to='/dashboard/adminHome' className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to='/dashboard/userHome' className="hover:text-orange-400 hover:bg-transparent transition-colors duration-300 font-medium px-3 py-2 rounded-md">Dashboard</Link></li>
        }
        <li>
            <Link to="/dashboard/cart" className="relative">
                <button className="btn btn-ghost hover:bg-transparent hover:text-orange-500 transition-all duration-300 flex items-center gap-2">
                    <FaCartPlus className="text-lg" />
                    <div className="badge bg-orange-500 text-white border-orange-500 text-xs font-bold">+{cart.length}</div>
                </button>
            </Link>
        </li>
    </>

    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-50 bg-black/30 backdrop-blur-md text-white shadow-lg border-b border-white/10">
                {/* Mobile Menu */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-white/10 transition-colors duration-300">
                            <FaBars className="h-5 w-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black/90 backdrop-blur-md rounded-xl z-[1] mt-3 w-64 p-4 shadow-2xl border border-white/10">
                            {navOptions}
                            {/* Mobile Login/Logout */}
                            <div className="divider divider-neutral my-2"></div>
                            <li className="lg:hidden">
                                {
                                    user ? 
                                    <button 
                                        onClick={handleLogOut} 
                                        className="btn bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold transition-all duration-300 transform hover:scale-105"
                                    >
                                        LogOut
                                    </button>
                                    : 
                                    <Link 
                                        to='/login' 
                                        className="btn bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold transition-all duration-300 transform hover:scale-105"
                                    >
                                        Login
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                    
                    {/* Website Name */}
                    <Link to="/" className="btn btn-ghost text-xl font-bold text-white hover:text-orange-500 hover:bg-transparent transition-colors duration-300 tracking-wide">
                        🍽️ Bistro Boss
                    </Link>
                </div>
                
                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        {navOptions}
                    </ul>
                </div>
                
                {/* Desktop Login/Logout */}
                <div className="navbar-end hidden lg:flex">
                    {
                        user ? 
                        <button 
                            onClick={handleLogOut} 
                            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold px-6 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            LogOut
                        </button>
                        : 
                        <Link 
                            to='/login' 
                            className="btn bg-orange-500 hover:bg-orange-600 text-white border-none font-semibold px-6 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Login
                        </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;