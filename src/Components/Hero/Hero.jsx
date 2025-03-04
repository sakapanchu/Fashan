import React from "react";
import "./hero.css"
import arrow_icon from "../Assets/arrow.png"
import home_img from "../Assets/home_img.png"
import home_img2 from "../Assets/home/home_img2.png"
const Hero = () => {
  return (
    < div className="hero">
      < div className="hero-left">
        <div>
            <div>
                <h2>"Fashion"</h2>
            </div>
            <div>
                <p>is not something that exists in dresses only fashion<br/> is in the sky, in the strect fashion has to do with ideas the way<br/>we live what is happening.</p>
            </div>
            <div className="hero-latest">
                <button className="hero-latest-btn">Latest Collection
                <img src={arrow_icon} alt =""></img>
                </button>
            </div>
            
            
        </div>
    

            

      </div>

      <div className="hero-right">
        <img src={home_img2} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
