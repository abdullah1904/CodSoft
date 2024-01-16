import mailicon from "./Assets/Icons/Gmail.png";
import githubicon from "./Assets/Icons/Github.png";
import linkedinicon from "./Assets/Icons/LinkedIn.png";
import callicon from "./Assets/Icons/Phone.png";
import msgicon from "./Assets/Icons/Message.png";
export default function Contact() {
    return (
        <div className="bg-one text-white py-5">
            <div className="w-80 mx-auto">
                <h2 className="text-center text-5xl font-one font-semibold border-white border-b-4 border-double py-2">Contact</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 px-6 py-5 justify-items-center">
                <div>
                    <a href="tel:+923084546955"><img src={callicon} alt="" className="w-24"/></a>
                </div>
                <div>
                    <a href="https://github.com/abdullah1904"><img src={githubicon} alt="" className="w-24"/></a>
                </div>
                <div>
                    <a href="mailto:mabdullahzahid782@gmail.com"><img src={mailicon} alt="" className="w-24"/></a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/muhammad-abdullah-zahid-49b2a0259/"><img src={linkedinicon} alt="" className="w-24"/></a>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <a href="sms:+923084546955"><img src={msgicon} alt="" className="w-24"/></a>
                </div>
            </div>
        </div>
    )
}
