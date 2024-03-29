import React from 'react';
import "./News.css";
import bluesqure from "../images/bluesqure.png";
import Lorry from "../images/lorry.jpeg";
import Cargo from "../images/cargo.jpeg";
import Ship from "../images/ship.jpeg";
import Train from "../images/train.jpeg";


export default function News(){
    return(
        <div className="newscontain my-4">
            <h3>LATEST NEWS</h3>
            <div className="newstopic">
            <img className="topicimg" src={bluesqure} alt="blue" />&nbsp;
            <p style={{ color: '#7F8C8D' }}>INTEGER CONGUE ELIT</p>
            </div>

            <div className="newsline1">
                <div className="news1">
                     <div className="new1img">
                     <img className="new1imgs" src={Lorry} alt="welimg1" />&nbsp;
                     <div className="date">
                        <h5>26</h5>
                        <p>MAY</p>
                     </div>
                     </div>
                     <div style={{ 'background-color': '#496FF8' }} className="new1des">
                          <h6 className="n1topic">CURABITUR LOREM UISM QUIS</h6>
                          <p className="n1sub">Admin</p>
                          <p className="n1p1">Pellentesque habitant morbi tristique</p>
                          <p className="n1p2">sene clus eft netus eft malesuada fames</p>
                          <p className='n1p3'>turpis egestas Aenean non donec ...</p>
                     </div>
                </div>

                <div className="news2">
                    <div className="new1img">
                     <img className="new1imgs" src={Train} alt="welimg1" />&nbsp;
                     <div className="date1">
                        <h5>22</h5>
                        <p>MAY</p>
                     </div>
                     </div>
                     <div className="new1des">
                          <h6 className="n1topic">CURABITUR LOREM UISM QUIS</h6>
                          <p className="n1sub">Admin</p>
                          <p className="n1p1">Pellentesque habitant morbi tristique</p>
                          <p className="n1p2">sene clus eft netus eft malesuada fames</p>
                          <p className='n1p3'>turpis egestas Aenean non donec ...</p>
                     </div>
                </div>
            </div>

            <div className="newsline1">
                <div className="news1">
                     <div className="new1img">
                     <img className="new1imgs" src={Cargo} alt="welimg1" />&nbsp;
                     <div className="date3">
                        <h5>20</h5>
                        <p>MAY</p>
                     </div>
                     </div>
                     <div className="new1des">
                          <h6 className="n1topic">CURABITUR LOREM UISM QUIS</h6>
                          <p className="n1sub">Admin</p>
                          <p className="n1p1">Pellentesque habitant morbi tristique</p>
                          <p className="n1p2">sene clus eft netus eft malesuada fames</p>
                          <p className='n1p3'>turpis egestas Aenean non donec ...</p>
                     </div>
                </div>

                <div className="news2">
                    <div className="new1img">
                     <img className="new1imgs" src={Ship} alt="welimg1" />&nbsp;
                     <div className="date3">
                        <h5>15</h5>
                        <p>MAY</p>
                     </div>
                     </div>
                     <div className="new1des">
                          <h6 className="n1topic">CURABITUR LOREM UISM QUIS</h6>
                          <p className="n1sub">Admin</p>
                          <p className="n1p1">Pellentesque habitant morbi tristique</p>
                          <p className="n1p2">sene clus eft netus eft malesuada fames</p>
                          <p className='n1p3'>turpis egestas Aenean non donec ...</p>
                     </div>
                </div>
            </div>
        </div>
    )
}