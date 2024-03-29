import React from 'react';
import "./Welcome.css";
import welimg1 from "../images/welimg1.jpg";
import welimg2 from "../images/welimg2.jpg";
import clientimg from "../images/clientimg.png";

export default function Welcome(){
    return(
        <div className="welcomecontain mx-5 my-5">
            <div className="welright">
            <img  className="welimg1" src={welimg1}  alt="Logo"/>
            <img className="welimg2" src={welimg2}  alt="Logo"/>
            <img className="clientimg" src={clientimg} alt="Logo" />
            <h2>15,350+</h2>
            <p>Clients Worldwide</p>
            </div>


            <div className="welleft">
            <h2 className="line1">TransMax Lagistics</h2>
            <div className='wellefttopic'>
            
              <h2 className="line2">Around</h2>&nbsp;
              <h2 className="line3">the World</h2>
            </div>
              
              <p className="pl1">Transmax is the world's driving worldwide coordinations </p>
              <p className="pl2">supplier -- we uphold industry and exchange the worldwide</p>
              <p className="pl3">trade of merchandise through land transport</p><br/>
              
              <p className="pl4">Our worth added administrations guarantee the progression</p>
              <p className="pl5">products proceeds consistently and supply chains stay lean and</p>
              <p className="pl6">streamlined for progress</p>

              <button className="welbutton">MORE ABOUT US</button>
            </div>
        </div>
    )
}