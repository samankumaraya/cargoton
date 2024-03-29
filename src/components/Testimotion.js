import React from 'react';
import "./testimotion.css";
import Trustclient from "../images/trustclient.png";


export default function footer(){
    return(
        <div className="testimotioncontain my-5  ">
             <div className="tesleft">
                  <h5 className="teslefttopic"><b>TRUSTED CLIENTS</b></h5>
                  <p className="tesleftsubtopic">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                  <img  className="Trustclient" src={Trustclient}  alt="Logo"/>
                  <p className='trp1'>Integer congue elit non semper laoreet sed lectus orci posuer nisl  </p>
                  <p className='trp2'>felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel yarn</p>
                  <p className='trp3'>vestibulum. Nam rutrum congue diam. Aliquam malesuada inyd  </p>
                  <p className='trp4'>Curabitur laoreet convallis nisal pellentesque   </p>
                  <h4 className="john"><b>JOHN DEO</b></h4>
                  <p className="manager">Managing Director</p>
             </div>
             <div className="tesright">
             <h5 className="teslefttopic"><b>WHY CHOOSE US</b></h5>
                  <p className="tesleftsubtopic"> LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
                  <hr className="hr1"/>
                  <p className="tesleftsubtopic1">Dui ac hendrerit elementum quam ipsum auctor lorern</p>
                  <hr className="hr2"/>
                  <p className="tesleftsubtopic2">Mauris vel magna a est lobortis volutpat</p>
                  <hr className="hr3"/>
                  <p className="tesleftsubtopic3">Sed bibendum ornare lorem mauris feugiat suspendisse neque</p>
                  <hr className="hr4"/>
                  <p className="tesleftsubtopic4">Nulla scelerisque dul hendrerit elementum quam</p>
                  <hr className="hr5"/>
             </div>
        </div>
    )
}