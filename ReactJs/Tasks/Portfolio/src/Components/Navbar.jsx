import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-one text-white border-b-2 border-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-second text-one">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="skills">Skills</Link></li>
                            <li><Link to="projects">Projects</Link></li>
                            <li><Link to="contact">Contact</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-second" href='/'>Muhammad Abdullah</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-second">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="skills">Skills</Link></li>
                        <li><Link to="projects">Projects</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn bg-white text-one">Contact</a> */}
                </div>
            </div>
        </div>
    )
}
