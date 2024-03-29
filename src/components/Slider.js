import React from 'react';
import "./Slider.css";
import Slider1 from "../images/slider1.jpg"
import Slider2 from "../images/slider2.jpg"




export default function Slider(){
  return(
    <div className="slidecontainer mx-5 my-4">

<div  class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="slider1" src={Slider1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="slider1" src={Slider2} alt="Second slide"/>
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    
  </a>
</div>

<div className="slideright">
  
  <h6 className="logistic" style={{ padding: '11%' }}>LOGISTIC</h6><br />
  <h1 class="bestship">Best Shiping</h1>
  <p className="partner"><b>Partner</b></p>
  <p className="logispara">
  Amet, tempus egestas facilisis volutpat viverra molestie lobortis   
  </p>
  <p className="logispara1">
posuere maecena. molestie lobortis posuere maecenas. Eget
  </p>
  <p className="logispara2">
    sapien,garvida nequi
  </p>

  <button className="logisticbtn"><b>DISCOVER MORE</b></button>
</div>
    </div>
  )  
}