import React from 'react';
import "./Header.css";
import logo from "../images/logo.png"


 function Header() {

    
  
    return(
        <div>
            <div className="headercontainer  mt-3  mx-5 ">
             <div className="logocontain">
               <h1>Cargo</h1>
               <img src={logo} alt="Logo" />
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               
             {/* Home*/}
             
             <div class="dropdown">
  <a class="btn  dropdown-toggle mt-2" href=".com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    HOME
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cargoton.com">Action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Another action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Something else here</a></li>
  </ul>
</div>
             {/* */}

             {/* Pages*/}
             
             <div class="dropdown">
  <a class="btn  dropdown-toggle mt-2" href=".com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    PAGES
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cargoton.com">Action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Another action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Something else here</a></li>
  </ul>
</div>
             {/* */}

{/* Tracking*/}
             
<div class="dropdown">
  <a class="btn  dropdown-toggl mt-2" href=".com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    TRACKING
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cargoton.com">Action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Another action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Something else here</a></li>
  </ul>
</div>
             {/* */}

{/* Services*/}
             
<div class="dropdown">
  <a class="btn  dropdown-toggle mt-2" href=".com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    SERVICES
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cargoton.com">Action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Another action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Something else here</a></li>
  </ul>
</div>
             {/* */}

{/* Blog*/}
             
<div class="dropdown">
  <a class="btn  dropdown-toggle mt-2" href=".com" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    BLOG
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" href="cargoton.com">Action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Another action</a></li>
    <li><a class="dropdown-item" href="cargoton.com">Something else here</a></li>
  </ul>
</div>
             {/* */}

             <button className="butQuote">&nbsp;&nbsp;GET A QUOTE&nbsp;&nbsp;</button>&nbsp;&nbsp;
             <button className="btnsign">&nbsp;&nbsp;SIGN IN&nbsp;&nbsp;</button>
             </div>

            

        </div>
        <div>
            <h6 className="ton">TON</h6>
        </div>
        </div>
        
    );
}
export default Header;