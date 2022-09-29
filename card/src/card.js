import React from "react";
import './card.css';
import Login from './logion.png';
import Jana from './jana1.jpg'
import Css from './csslogo.png';
import Goa from './goa.jpg';
export default function Card() {
  return (
    <>
      <div className="conatiner">
        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Login} alt="Avatar" style={{ width: "300px", height: "300px" }} />
              </div>
              <div className="flip-card-back">
                <img src={Css} style={{ width: "300px", height: "300px" }} />
                {/* <h1>Janarthanan</h1>
                <p>Front-End Development</p>
                <p>Hi Hello Everyone</p> */}
              </div>
            </div>
            <div >
              <h2 className="con">Card Design</h2>
              <p className="con1">Rotation Card</p>
              <p className="pa">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Amet delectus maxime ut debitis dolor, maiores incidunt facere consequuntur,
                quisquam consequatur quo fugiat doloremque optio</p>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={Goa} alt="Avatar" style={{ borderRadius:"30px", width: "300px", height: "300px" }} />
              </div>
              <div className="flip-card-back">
                {/* <img src={Css} style={{ width: "300px", height: "300px" }} /> */}
                <h1 className="hh">Let's Start<br/> a Goa Trip</h1>
                <p className="h">Welcome</p>
                <p className="h">To Goa</p>
              </div>
            </div>
            <div>
              <h2 className="con2">Goa</h2>
              <p className="g">Goa Welcome's You</p>
              <p className="co">Goa, a tiny emerald land on the west coast of India, 
              the 25th state of the Union states of India</p><br/>
              <button >Check</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}