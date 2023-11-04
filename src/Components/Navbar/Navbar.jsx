import { useContext  } from "react";
import { Link, NavLink } from "react-router-dom";



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
                    isPending ? "pending" : isActive ? "text-sky-600 dark:text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : "dark:text-white"
                }
            >
                Home
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/addProduct"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 dark:text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : "dark:text-white"
                }
            >
                Add Product
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/myCarts"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 dark:text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : "dark:text-white"
                }
            >
                My Cart
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 dark:text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : "dark:text-white"
                }
            >
                Sign In
            </NavLink>
        </li>
        <li className="">
            <NavLink
                to="/register"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-sky-600 dark:text-sky-600 rounded-none shadow-lg font-bold border-b-2 border-sky-600" : "dark:text-white"
                }
            >
                Sign Up
            </NavLink>
        </li>
    </>


    return (
        <div className="max-w-screen-xl mx-auto px-4">
            <div className="navbar bg-base-100 dark:bg-black flex justify-between items-center">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" font-semibold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="flex gap-2 items-center">
                        <img className="w-10 h-10" src="https://i.ibb.co/Drx9h54/logo.png" alt="logo" />
                        <span className="text-cyan-700 font-bold text-3xl">E Tech</span>
                    </Link>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="flex gap-4 menu menu-horizontal px-1 font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-4">

                    <div>
                        {user ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 border-2 border-sky-700 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded w-60 dark:bg-slate-900"
                                >
                                    <li>
                                        <a className="justify-between text-md hover:bg-transparent font-bold text-sky-700">
                                            {user.displayName}
                                        </a>
                                    </li>
                                    <li>
                                        <span className="justify-between font-semibold hover:bg-transparent mb-2 text-sky-700">{user.email}</span>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleSignOut}
                                            className="text-sky-700 text-center hover:bg-sky-700 hover:text-[white] font-semibold px-3 py-1 rounded border border-sky-700"
                                        >
                                            Log Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/login">
                                {" "}
                                <button onClick={handleSignOut} className="text-sky-700 hover:bg-sky-700 hover:text-[white] font-semibold px-3 py-1 rounded border border-sky-700">Log In</button>{" "}
                            </Link>
                        )}
                    </div>



                </div>

            </div>
        </div>
    );
};


export default Navbar;