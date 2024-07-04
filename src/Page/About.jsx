import { Outlet } from "react-router-dom";
import Hero from "../components/Hero/Hero";

export default function About() {
    return (
        <div>
            <Hero img="/vica-trippy/assets/img/aboutBg.jpg" title="About" btn={{ show: false }} />
            <div>
                <Outlet />
            </div>
        </div>
    )
}
