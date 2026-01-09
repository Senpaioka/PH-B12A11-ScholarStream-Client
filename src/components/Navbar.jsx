import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import defaultPic from '../assets/images/dp.jpg'


function Navbar() {

    const {user, logoutUser} = useAuth();
    const {theme, toggleTheme} = useTheme();

    const menuLink = (
        <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/scholarships">All Scholarships</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/payment-history">Payment</NavLink></li>
        <li><NavLink to="/feedback">Feedback</NavLink></li>
        </>
    )


    return (

        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar w-10/12 mx-auto">
    
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    { menuLink }
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">ScholarStream</Link>
            </div>


            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    { menuLink }
                </ul>
            </div>


            <div className="navbar-end">
                {/* Theme Toggle Button */}
                <button 
                    onClick={toggleTheme}
                    className="btn btn-ghost btn-circle mr-2"
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        // Moon icon for dark mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    ) : (
                        // Sun icon for light mode
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </button>

                {
                    user ? (
                        <>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img className="w-full" src={user?.photoURL || defaultPic} alt={user?.displayName || 'Default Profile Pic'} />
                                </div>
                            </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-99 mt-3 w-52 p-2 shadow space-y-3">
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li onClick={logoutUser}><a className="btn bg-red-400 text-white">Logout</a></li>
                        </ul>
                        </div>
                        </>
                    ) : (
                        <>
                        <div className="space-x-3">
                            <Link to="/login" className="btn">Login</Link>
                            <Link to="/register" className="btn">Register</Link>
                        </div>
                        </>
                    )
                }

            </div>
            </div>
        </div>
    );
}

export default Navbar;



