import React from 'react';
import './signup.css';
function SignUp() {
  return (
    <div className='sign-up'>
        <div className='form-container'>
            <h1 className='sign-up-header'>Sign Up</h1>
            <form>
                <input type="text" placeholder="Name" name='Name'/>
                <input type="mail" placeholder="Email" name="Email"/>
                <input type="password" placeholder="Password" name="Password"/>
                <input type="text" placeholder="Phone Number" name="Phone Number"/>
                <input type="text" placeholder="City" name="City"/>
                <input type="text" placeholder="Address" name="Address"/>
                <input className='btn-submit' type="submit" value="Sign Up" name="Sign Up"/>
            </form>
        </div>
        <div className='img-container'>

        </div>
    </div>
  )
}

export default SignUp