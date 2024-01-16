import HTMLicon from "./Assets/Icons/HTML.png";
import CSSicon from "./Assets/Icons/CSS.png";
import JavaScripticon from "./Assets/Icons/JS.png";
import Reacticon from "./Assets/Icons/React.png";
import Bootstrapicon from "./Assets/Icons/Bootstrap.png";
import Tailwindicon from "./Assets/Icons/Tailwind.png";
import jQueryicon from "./Assets/Icons/jQuery.png";
import pythonicon from "./Assets/Icons/Python.png";
import cppicon from "./Assets/Icons/C++.png";
import phpicon from "./Assets/Icons/PHP.png";
import mysqlicon from "./Assets/Icons/MySQL.png";
import oppicon from "./Assets/Icons/OOP.png";
import dsicon from "./Assets/Icons/DS.png";
import algoicon from "./Assets/Icons/Algortihms.png";

export default function Skills() {
    return (
        <div className="bg-one text-white py-5">
            <div className="w-80 mx-auto">
                <h2 className="text-center text-5xl font-one font-semibold border-white border-b-4 border-double py-2">Skills</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-3 px-6 md:px-10 py-10 md:py-5">
                <div className="border-2 border-white border-double rounded p-3 flex items-center md:col-span-2">
                    <img src={Reacticon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">React</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center md:col-span-2">
                    <img src={Tailwindicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Tailwind CSS</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={HTMLicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">HTML</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={CSSicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">CSS</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={JavaScripticon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">JavaScript</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={Bootstrapicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Bootstrap</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={jQueryicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">jQuery</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={pythonicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Python</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={cppicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">C++</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={phpicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">PHP</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={mysqlicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">MySQL</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={oppicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Object-Oriented Programming</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={dsicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Data Structures</p>
                </div>
                <div className="border-2 border-white border-double rounded p-3 flex items-center">
                    <img src={algoicon} alt="HTML icon" className="w-20 md:w-24 " />
                    <p className="text-2xl font-second mx-2">Algorithms</p>
                </div>
            </div>
        </div>
    )
}
