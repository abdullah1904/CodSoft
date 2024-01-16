import { Link } from "react-router-dom"
import image from "./Assets/Images/Profile.png"
export default function Hero() {
  return (
    <div>
      <div className="hero bg-none py-5 md:py-20 text-one">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-64 md:max-w-80 rounded-lg" />
          <div className="text-center md:text-left p-0 md:pe-32">
            <h1 className="text-5xl font-bold font-second">Muhammad Abdullah</h1>
            <p className="py-6 font-one capitalize">Undergraduate Student of Computer Science at University of Engineering and Technology, Lahore with expertise in field of Web Development</p>
            <Link className="btn bg-one text-white" to="contact">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
