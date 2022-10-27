import React from 'react'; 
import { Link } from 'react-router-dom'
 
class Navbar extends React.Component {
   

    
  render() {

  	return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
            <div className="container">
            <a className="navbar-brand logo text-uppercase" href="/">
            <img alt="POLWDLogo" src="images/logo-medium.png" width="70" height="70"></img>
                </a>
                
                <a className="navbar-brand logo text-uppercase" href="/">
                    PolWD
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="mdi mdi-menu"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav navbar-center" id="mySidenav">
                        <li className="nav-item active">
                            <a href="#home" className="nav-link">Home</a>
                        </li>
                         
                        <li className="nav-item">
                            <a href="#features" className="nav-link">Features</a>
                        </li>
                        
                        
                        <li className="nav-item">
                            <a href="#prox" className="nav-link">Process</a>
                        </li>
                        
                    </ul>
                    <div className="nav-button ml-auto">
                        <ul className="nav navbar-nav navbar-right">
                        <li>

                                    
                                  <a href="#features" className="nav-link"> 
                                   <button type="button"   className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light" id="Login">Apply Now</button> 
                                </a>  
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
  	);
  }
}

export default Navbar;