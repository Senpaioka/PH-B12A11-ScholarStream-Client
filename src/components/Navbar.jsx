import { Link, NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";
import defaultPic from '../assets/images/dp.jpg'


function Navbar() {

    const {user, logoutUser} = useAuth();

    const menuLink = (
        <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/scholarships">All Scholarships</NavLink></li>
        <li><a>Payment</a></li>
        <li><a>Item 4</a></li>
        <li><a>Item 5</a></li>
        </>
    )


    return (

        <div className="bg-base-100 shadow-sm">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className="justify-between">Profile<span className="badge">New</span></a></li>
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



