import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const changer = () => {
        document.querySelectorAll(".change").forEach((e) => {
            e.addEventListener("click", () => {
                document.querySelectorAll(".change").forEach((e) => {
                    e.classList.remove("active");
                    e.classList.add('text-white')
                })
                e.classList.add("active");
                e.classList.add("text-primary");
                e.classList.remove('text-white');
            });
        });
    }
    useEffect(()=>{
        changer();
        document.querySelector(".change").click();
    })
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-auto" to="/">{props.name}</Link>
                </div>
            </nav>
            <ul className="nav nav-tabs ps-2 pt-2 bg-primary">
                <li className="nav-item mx-1">
                    <Link className="nav-link active change" to="todo">Todo</Link>
                </li>
                <li className="nav-item mx-1">
                    <Link className="nav-link change text-white" to="completed">Completed</Link>
                </li>
            </ul>
        </div>
    )
}
