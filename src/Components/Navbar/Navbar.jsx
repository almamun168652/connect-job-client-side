import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const navLinks = <>
       <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] rounded-none shadow-lg font-bold border-b-2 border-[#152475]" : "text-[#152475]"
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/all-jobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] rounded-none shadow-lg font-bold border-b-2 border-[#152475]" : "text-[#152475]"
                }
            >
                All Jobs
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/applied-jobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] rounded-none shadow-lg font-bold border-b-2 border-[#152475]" : "text-[#152475]"
                }
            >
                Applied Jobs
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/add-a-jobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] rounded-none shadow-lg font-bold border-b-2 border-[#152475]" : "text-[#152475]"
                }
            >
                Add A Job
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/my-jobs"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#152475] rounded-none shadow-lg font-bold border-b-2 border-[#152475]" : "text-[#152475]"
                }
            >
                My Jobs
            </NavLink>
        </li>


    </>

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 flex justify-between">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="flex gap-1 items-center">
                        <img className="w-12" src="https://i.ibb.co/kg76nkv/job-logo.png" alt="" /><span className="text-[#152475] font-bold text-3xl">Connect Job</span>
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="">

                    {user ? (
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 border-2 border-[#152475] rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-60"
                            >
                                <li>
                                    <a className="justify-between text-md hover:bg-transparent font-bold text-[#152475]">
                                        {user.displayName}
                                    </a>
                                </li>
                                <li>
                                    <span className="justify-between font-semibold hover:bg-transparent mb-2 text-[#152475]">{user.email}</span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="text-[#152475] text-center hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]"
                                    >
                                        Log Out
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <Link to="/login">
                            {" "}
                            <button onClick={handleSignOut} className="text-[#152475] hover:bg-[#152475] hover:text-[white] font-semibold px-3 py-1 rounded border border-[#152475]">Log In</button>{" "}
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Navbar;