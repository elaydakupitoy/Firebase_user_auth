import React from  'react';
import {useState} from 'react'

function Welcome(props) {
     
    const [showMe, setShowMe] = useState(props.isLoggedIn);
     
     

    if(showMe) {
        return (
            <div className="shadow-lg p-5 bg-white rounded">
                <form className="signUp">
                    <h3>Create Your Account</h3>
                    <p>Just enter your email address 
                    and your password for join.
                    </p>
                    <div className="form-group-sm">
                        
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                                             
                        <small className="form-text text-muted">Enter your password with more than 6 letters.</small>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
                        <small className="form-text text-muted">Verify Password</small>
                        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Verify Password" required/>
                    </div>
                    
                    <button className="btn btn-custom   waves-effect waves-light"  type="button">Sign Up</button>
                    
                    <button className="btn" onClick={() => setShowMe(!showMe)} type="submit">Have Account, Login</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="shadow-lg p-5 bg-white rounded ">
                <form className="signIn">
                    <h3>Sign In</h3>
                     

                    
                     <div className="form-group-sm">
                        <button className="btn waves-effect  m-3" type="button"> <i className="bi bi-facebook p-3"></i>&nbsp; Facebook</button>
                        <button className="btn waves-effect  m-3" type="button"> <i className="bi bi-google p-3"></i>&nbsp; Google</button>
                    </div>
                     
                   
                    <div className="text-center">- or -</div>

                    <div className="form-group-sm">
                        
                        <small className="form-text text-muted">Email</small>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                                             
                        <small className="form-text text-muted">Password</small>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                         
                    </div>




 
                    <button className="btn btn-custom   waves-effect waves-light"  type="button">Login</button>
                    <button className="btn" onClick={() => setShowMe(!showMe)} type="submit">Create Account</button>
                    </form>
            </div>
        
        
            )
    }
     
    
   
  }

  export default Welcome;