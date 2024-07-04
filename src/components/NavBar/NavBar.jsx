import { Link, NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css'
import { useState } from 'react';
export default function NavBar({ logo, navItems, btn }) {
    const [show, setshow] = useState(false);
    const navigate = useNavigate();

    const changeUrl = () =>{
        navigate("/signup")
    }
    return (
        <>
            <nav>
                <h1 className="logo">{logo}</h1>
                <div className="items">
                    <ul>
                        {/*                         {navItems.map((element, index) => {
                            return (
                                <li key={index}>
                                    <NavLink
                                        to={element.Link}
                                        className={({ isActive }) =>
                                            isActive ? "active" : ""
                                        }
                                    >
                                        <i className={element.icon}></i> {element.text}
                                    </NavLink>
                                </li>
                            )
                        })} */}
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={navItems[0].icon}></i> {navItems[0].text}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={navItems[1].icon}></i> {navItems[1].text}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={navItems[2].icon}></i> {navItems[2].text}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={navItems[3].icon}></i> {navItems[3].text}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about/test"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                <i className={navItems[3].icon}></i> test
                            </NavLink>
                        </li>

                    </ul>
                    <button onClick={changeUrl}>{btn}</button>
                </div>
                <button className='burger' onClick={()=>setshow(prev => !prev)}><i className={`fas  ${(show)? "fa-times" : "fa-bars"} `} ></i> {/* <i className='fas' style={{display : (show)? "block" : "none"}}></i> */}</button>
            </nav>
            <div className={`navMenu ${(show) ? "active" : ""}`}>
                <ul>
                    {navItems.map((element, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={element.Link}
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                >
                                    <i className={element.icon}></i> {element.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button>{btn}</button>
            </div>
        </>
    )
}
