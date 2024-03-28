import React from 'react';
import "./Footer.css";
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import logo3 from "../images/logo3.png"
import logo4 from "../images/logo4.png"
import logo5 from "../images/logo5.png"

export default function ClientLogo(){
    return(
        <div className="logocontainer my-5 mx-4">
           <div class="row">
    <div class="col-sm">
    <img style={{ width: '45%', height: '85%' }} src={logo1} alt="Logo" />
    </div>
    <div class="col-sm">
    <img style={{ width: '45%', height: '85%' }} src={logo2} alt="Logo" />
    </div>
    <div class="col-sm">
    <img style={{ width: '45%', height: '85%' }} src={logo3} alt="Logo" />
    </div>
    <div class="col-sm">
    <img style={{ width: '45%', height: '85%' }} src={logo4} alt="Logo" />
    </div>
    <div class="col-sm">
    <img style={{ width: '45%', height: '85%' }} src={logo5} alt="Logo" />
    </div>
  </div>
        </div>
    )
}