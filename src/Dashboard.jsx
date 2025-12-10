import { Outlet } from "react-router";
import { Link, NavLink } from "react-router";
import useUserRole from './hooks/useUserRole';

// icons
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { FaRegFolderClosed } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { FaFileCircleCheck } from "react-icons/fa6";



function Dashboard() {

    const { role, roleLoading } = useUserRole();

    if (roleLoading) return;

    return (
            <div>
        <div className="drawer lg:drawer-open">

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                    {/* Sidebar toggle icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                </label>
                <div className="px-4">Dashboard - ScholarStream</div>
                </nav>
                {/* Page content here */}
                {/* <div className="p-4">Page Content</div> */}
                <div className="p-4">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">

                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                {/* Sidebar content here */}
                <ul className="menu w-full grow">
                    {/* List item */}
                    <li>
                    <Link to="/dashboard" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                        {/* Home icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                        <span className="is-drawer-close:hidden">Homepage</span>
                    </Link>
                    </li>

                    {/* List item */}
                    <li>
                    <NavLink to="/dashboard/settings" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                        {/* Settings icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                        <span className="is-drawer-close:hidden">Settings</span>
                    </NavLink>
                    </li>

                    {/* List item */}
                    <li>
                    <NavLink to="/dashboard/profile" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Profile">
                        {/* profile icon */}
                    <FaUser className="my-1.5 inline-block size-4"/>
                    <span className="is-drawer-close:hidden">Profile</span>
                    </NavLink>
                    </li>


                    {/* List item */}
                    { role === "admin" && (
                        <li>
                            <NavLink to="/dashboard/publish" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Publish Scholarship">
                                {/* publish icon */}
                            <FaRegPenToSquare className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">Publish</span>
                            </NavLink>
                        </li>
                    )}
                    

                    {/* List item */}
                    { role === "admin" && (
                        <li>
                            <NavLink to="/dashboard/analysis" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Analysis">
                                {/* back to site icon */}
                            <FaChartLine className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">Analysis</span>
                            </NavLink>
                        </li>
                    )}
                    

                    {/* List item */}
                    { (role === "moderator" || role === "admin") && (
                        <li>
                            <NavLink to="/dashboard/all-posted-scholarships" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="All Posted Scholarship">
                                {/* back to site icon */}
                            <FaRegFolderClosed className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">All Posted Scholarship</span>
                            </NavLink>
                        </li>
                    )}


                    {/* List item */}
                    { role === "admin" && (
                        <li>
                            <NavLink to="/dashboard/manage-users" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Manage Users">
                                {/* manage user icon */}
                            <FaUserGroup className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">Manage Users</span>
                            </NavLink>
                        </li>
                    )}



                    {/* List item */}
                    { (role === "admin" || role === "moderator") && (
                         <li>
                            <NavLink to="/dashboard/all-applicants" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Applicants">
                                {/* applicants icon */}
                            <FaUserGraduate className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">Applicants</span>
                            </NavLink>
                        </li>
                    )}
                   

                    {/* List item */}
                    <li>
                    <NavLink to="/dashboard/applications" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Applications">
                        {/* applications icon */}
                    <FaFileCircleCheck className="my-1.5 inline-block size-4"/>
                    <span className="is-drawer-close:hidden">Applications</span>
                    </NavLink>
                    </li>

                    {/* List item */}
                    { (role === "admin" || role === "moderator") && (
                        <li>
                            <NavLink to="/dashboard/student-reviews" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Reviews">
                                {/* review icon */}
                            <FaRegMessage className="my-1.5 inline-block size-4"/>
                            <span className="is-drawer-close:hidden">Reviews</span>
                            </NavLink>
                        </li>
                    )}
                    

                    {/* List item */}
                    <li>
                    <NavLink to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Go Back to website">
                        {/* back to site icon */}
                    <FaArrowLeftLong className="my-1.5 inline-block size-4"/>
                    <span className="is-drawer-close:hidden">Go Back</span>
                    </NavLink>
                    </li>
                </ul>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Dashboard;