import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import UserContext from "../content/UserContext"

export default function Header() {

    const { isUserIn, user, setIsUserIn } = useContext(UserContext)

    function handleClick() {
        setIsUserIn(false)
    }

    return (
        <div className="sticky z-10 top-0 font-poppins w-full border-b-2 bg-white backdrop-filter backdrop-blur-sm bg-opacity-85">
            <div className="flex items-end justify-between px-24 m-auto pt-6 pb-3 w-3/5">
                {/* logo */}
                <Link
                    to='/'>
                    <div className="text-3xl cursor-pointer font-bold">
                        React
                        <span className="text-red-600 font-roboto font-extrabold">
                            SITE
                        </span>
                    </div>
                </Link>

                {/* nav links */}
                <div className="flex items-center justify-center px-2">
                    {/* home */}
                    <div className="px-3">
                        <NavLink
                            to='/'
                            className={({isActive}) => 
                                `${isActive ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 cursor-pointer`}>
                            Home
                        </NavLink>
                    </div>

                    {/* about */}
                    <div className="px-3">
                        <NavLink
                            to='/about'
                            className={({isActive}) => 
                                `${isActive ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 cursor-pointer`}>
                            About
                        </NavLink>
                    </div>

                    {/* service */}
                    <div className="px-3">
                        <NavLink
                            to='/service'
                            className={({isActive}) => 
                                `${isActive ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 cursor-pointer`}>
                            Services
                        </NavLink>
                    </div>

                    {/* contact */}
                    <div className="px-3">
                        <NavLink
                            to='/contact'
                            className={({isActive}) => 
                                `${isActive ? 'text-red-600' : 'text-gray-700'} hover:text-red-600 cursor-pointer`}>
                            Contact
                        </NavLink>
                    </div>
                </div>

                {/* getting started */}
                <div className="flex items-end justify-end px-2 relative">
                    { isUserIn ? (
                        <div className="flex items-center gap-4 cursor-pointer">
                            <img className="w-12 border-2 rounded-full" 
                                src="/src/assets/head-pfp.svg" alt="pfp" />
                            <p>{user}</p>

                            <button className="px-3 py-1 rounded-lg text-white bg-red-600 hover:opacity-80 shadow-md"
                                onClick={handleClick}>
                                Logout
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link
                                to='/sign-up'>
                                <button className="px-4 mx-2 py-0.5 bg-red-500 text-white rounded-lg outline-none shadow-md hover:opacity-80">
                                    Sign Up
                                </button>
                            </Link>

                            
                            <Link
                                to='/login'>
                                <button className="px-4 py-0.5 bg-transparent border-2 rounded-lg outline-none shadow-md hover:opacity-80">
                                    Login
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    ) 
}