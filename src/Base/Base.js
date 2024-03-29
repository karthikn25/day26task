import React  from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../css/sb-admin-2.css';
import "../css/fontawesome-free/css/all.css";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser  }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";




 


function Base({children}){
   const history=useHistory()
   
    return(
        
        
        <div className="base-design">
         
        <div className="left-content">
        
       <div className="font-style">
        <h4>
            <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>
        </h4>
        <br/>
        <hr className="sidebar-divider my-0"></hr>
        <Link to="/" className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    <FontAwesomeIcon icon={faCircleUser} />
                    <span onClick={()=>history.push("/")} >Student Dashboard</span>
                    
        </Link>
        
       
        </div>
        </div>
        
        <div className="container">
        <div className="row top-bar">
        <div className="col-12">
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div class="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
            <div class="input-group-append">
                <button className="btn btn-primary" type="button">
                    <i class="fas fa-search fa-sm"></i>
                </button>
            </div>
        </div>
    </form>
       <div className="icons">
       <Link class="nav-link dropdown-toggle"  id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
       <i class="fas fa-bell fa-fw"></i>
       
       <span class="badge badge-danger badge-counter">3+</span>
   </Link>
        <Link class="nav-link dropdown-toggle"  id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                
                                <span class="badge badge-danger badge-counter">7</span>
                            </Link>
        <Link class="nav-link dropdown-toggle"  id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
        <img class="img-profile rounded-circle" src="img/undraw_profile.svg"/>
          </Link>
       </div>
 </div>
        </div>
        
        </div>
        <div className="right-content">{children}</div>
        </div>
    )
}

export default Base