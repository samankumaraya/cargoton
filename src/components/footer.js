import React from 'react';
import "./Footer.css";


export default function footer() {
    return(
        <div className="footercontain mx-2">
          <div className="lineone">
             <h3>&nbsp;Weekly Newsletter</h3>

             <form>
                <div class="form-group mt-1">
    
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your mail"/>
    
                 </div>
  
                <button type="submit" class="btn btn-warning btn-primary mt-1">SUBSCRIBE</button>
                </form>
          </div> 
            

            <div className="linetwo">
                <p>There are many vaiations of passages of lorem ipsum available</p>
            </div>

           
            <div className="linethree">

            <div class="row">
    <div class="col-sm " >
      About Us
    </div>
    <div class="col-sm">
      Latest News
    </div>
    <div class="col-sm">
      Customer Service
    </div>
    <div class="col-sm">
      Customer Service
    </div>
  </div>



  <div class="row" style={{ color: '#ffc107' }}>
    <div class="col-sm" >
      <h6>-----</h6>
    </div>
    <div class="col-sm">
      -----
    </div>
    <div class="col-sm">
      -----
    </div>
    <div class="col-sm">
      -----
    </div>
  </div>
  
            </div>
   <div className="linefour mt-2">
   <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>

   </div>

        </div>
    )
}

