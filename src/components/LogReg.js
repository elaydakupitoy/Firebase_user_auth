import React from  'react';
import {useState} from 'react'

function Welcome(props) {
    var visLoggedIn = props.isLoggedIn;

    const myFunction = (param) => {
        console.log("do something: ", param);
      };
     

    if(visLoggedIn) {
        return (
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <form className="signUp">
                    <h3>Create Your Account</h3>
                    <p>Just enter your email address 
                    and your password for join.
                    </p>
                    <input className="w100" type="email" placeholder="Insert eMail" required autoComplete='off' />
                    <input type="password" placeholder="Insert Password" required />
                    <input type="password" placeholder="Verify Password" required />
                    <button className="form-btn sx log-in" type="button">Log In</button>
                    <button className="form-btn dx" type="submit">Sign Up</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="shadow-lg p-3 mb-5 bg-white rounded">
                <form className="signIn">
                    <h3>Welcome Back !</h3>
                    <button className="fb" type="button">Log In With Facebook</button>
                    <p>- or -</p>
                    <input type="email" placeholder="Insert eMail" autocomplete='off' required />
                    <input type="password" placeholder="Insert Password" required />
                    <button className="form-btn sx back" type="button">Back</button>
                    <button className="form-btn dx" type="submit">Log In</button>
                    </form>
            </div>
        
        
            )
    }
     
    
   
  }

  export default Welcome;