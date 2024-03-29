import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import fimg1 from "../images/1.jpeg";
import fimg2 from "../images/2.jpeg";
import fimg3 from "../images/3.jpg";
import fimg4 from "../images/4.jpeg";
import fimg5 from "../images/5.jpeg";
import fimg6 from "../images/6.jpeg";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faRegistered } from '@fortawesome/free-solid-svg-icons';
import f from "../images/f.png";
import t from "../images/t.png";
import v from "../images/v.png";
import Be from "../images/be.png";



export default function footer() {
    return(
        <div className="footercontain mx-2">
          <div className="lineone">
             <h3 className="foothead" style={{ 'margin-left': '5.5%','margin-top': '1%' }}>&nbsp;Weekly Newsletter</h3>

             <form style={{ 'margin-left': '71%','margin-top': '1%' }}>
                <div class="form-group mt-1">
    
                <input   type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your mail"/>
    
                 </div>
                  &nbsp;
                <button type="submit" class="btn btn-warning btn-primary mt-1">SUBSCRIBE</button>
                </form>
          </div> 
            

            <div  style={{ 'margin-left': '-7%','margin-top': '1%' }} className="linetwo">
                <p>There are many vaiations of passages of lorem ipsum available</p>
            </div>

           
            <div className="linethree">

              <div className="foot1">
               <h5 style={{ position: 'relative','margin-top': '5%', 'margin-left': '-71%', 'padding-bottom': '5%'}}>About Us</h5>
               <p style={{ position: 'relative','margin-top': '5%', 'margin-left': '-16%'}}>Lorem ipsum dolor sit amet,consectetur</p>
               <p style={{ position: 'relative','margin-top': '-3%', 'margin-left': '-68%' }}>adipiscing elit.</p>
               <div style={{ display: 'flex' }}>
               <FontAwesomeIcon icon={faPhone} style={{ 'margin-top': '2%', 'margin-left': '2%' }}/>
               <p>&nbsp;| (+94) 11 434 7575</p>
               </div>

               <div style={{ display: 'flex' }}>
               <FontAwesomeIcon icon={faLocationDot}  style={{ 'margin-top': '2%', 'margin-left': '2%' }}/>
               <p>&nbsp;&nbsp;| 42 Lily Awe,Colombo 00600</p>
               </div>

              </div>

              <div className="foot2">
              <h5 style={{ position: 'relative','margin-top': '5%', 'margin-left': '-65%', 'padding-bottom': '5%'}}>Latest News</h5>

              <div style={{ display: 'flex' }}>
              <FontAwesomeIcon icon={faChevronRight} style={{ 'color': '#ffc107', 'margin-left': '1.5%','margin-top': '4.4%' }} />
              <p style={{ position: 'relative','margin-top': '3%', 'margin-left': '3%'}}>Set ut perspiciatis unde omnis iste</p>
              </div>
               
               <p style={{ position: 'relative','margin-top': '-3%', 'margin-left': '-33%' }}>natus error sit voluptatem</p>
               
               
               <p style={{ position: 'relative','margin-top': '2%', 'margin-left': '-55%' }}>5 Miniutes Ago</p>
               

               <div style={{ display: 'flex' }}>
              <FontAwesomeIcon icon={faChevronRight} style={{ 'color': '#ffc107', 'margin-left': '1.5%','margin-top': '2.5%' }} />
              <p style={{ position: 'relative','margin-top': '1%', 'margin-left': '3%'}}>Set ut perspiciatis unde omnis iste</p>
              </div>
               
               <p style={{ position: 'relative','margin-top': '-3%', 'margin-left': '-33%' }}>natus error sit voluptatem</p>
               <p style={{ position: 'relative','margin-top': '2%', 'margin-left': '-55%' }}>5 Miniutes Ago</p>
              </div>

              <div className="foot3">
              <h5 style={{ position: 'relative','margin-top': '5%', 'margin-left': '-71%', 'padding-bottom': '5%'}}>About Us</h5>
                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>Support Forums</Link></p>
                </div>

                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>Communication</Link></p>
                </div>

                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>FAQS</Link></p>
                </div>

                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>Privacy Policy</Link></p>
                </div>

                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>Rules & Condition</Link></p>
                </div>

                <div style={{ display: 'flex' }}>
                <FontAwesomeIcon icon={faHandPointRight} style={{color: "#ffffff",'margin-top': '5%', 'margin-left': '3%'}} />
                <p ><Link to="https://www.google.com" style={{position: 'absolute',color: "#ffffff", 'text-decoration': 'none','margin-top': '0.8%', 'margin-left': '1%'}}>Contact Us</Link></p>
                </div>
              </div>

              <div className="foot4">
              <h5 style={{ position: 'relative','margin-top': '5%', 'margin-left': '-71%', 'padding-bottom': '5%'}}>Customer Service</h5>
                   <div style={{'margin-top': '11%', display: 'flex' }}>
                   <img style={{  'margin-left': '-9%','margin-right': '3%',position: 'relative',width: '100px', height: '90px' }} src={fimg1} alt="Logo"  />
                   <img style={{ 'margin-right': '3%',width: '100px', height: '90px' }} src={fimg2} alt="Logo" />
                   <img style={{ width: '100px', height: '90px' }} src={fimg3} alt="Logo" />
                   </div>

                   <div style={{'margin-top': '3%', display: 'flex' }}>
                   <img style={{  'margin-left': '-9%','margin-right': '3%',position: 'relative',width: '100px', height: '90px' }} src={fimg4} alt="Logo"  />
                   <img style={{ 'margin-right': '3%',width: '100px', height: '90px' }} src={fimg5} alt="Logo" />
                   <img style={{ width: '100px', height: '90px' }} src={fimg6} alt="Logo" />
                   </div>
              </div>
              

            </div>
    
           
            <div className="foot5">
                <div className='foot5left'>
                     <p style={{ color: 'white','margin-left': '-23%' }}>Copyright <FontAwesomeIcon  icon={faCopyright} style={{color: "#ffffff",}} /> 2021 All Rights Reserved. Sited By Xiteb&nbsp;<FontAwesomeIcon style={{color: "#ffffff",width:'10px'}} icon={faRegistered} /></p>
                </div>
                <div className="foot5right">
                     <Link style={{ 'margin-right': '2%','margin-left': '72%' }} to="/"><img src={f} alt="Logo" /></Link>
                     <Link style={{ 'margin-right': '2%' }}><img src={t} alt="Logo" /></Link>
                     <Link style={{ 'margin-right': '2%' }}><img src={v} alt="Logo" /></Link>
                     <Link style={{ 'margin-right': '2%' }}><img src={Be} alt="Logo" /></Link>
                </div>
              </div>
        </div>
    )
}

