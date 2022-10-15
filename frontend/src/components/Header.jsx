import React from "react"

const Header = () => {
    return (
        <div className="navbar bg-base-100 bg-gradient-to-r from-purple-700 to-blue-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Meme Generator</a>
            </div>

            <div className="navbar-end">
                <a className="btn">Get started</a>
            </div>
        </div>
    )
}
export default Header