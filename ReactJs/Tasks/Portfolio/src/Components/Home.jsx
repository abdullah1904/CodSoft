import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";


export default function Home() {
    return (
        <div>
            <Hero />
            <Skills />
            <Projects />
            <Contact />
            <footer className="footer footer-center p-4 bg-one text-white border-t-2 border-white font-second">
                <aside>
                    <p>Copyright © 2024 - All right reserved</p>
                </aside>
            </footer>
        </div>
    )
}
