import React from 'react'

import logo from 'swimmer.gif'
import 'fonts/fonts.scss'
import './AuthForm.scss'

class AuthForm extends React.Component {
    render() {
        return(
            <div className="authForm_container">
                <div className="authForm_header">
                    <a href="/" className="logo"><img src={logo} alt="logo"></img></a>
                    <h2>Sign in to Swimmer</h2>
                </div>
                <div className="authForm_wrapper">
                    <form>
                        <label for="login_field">Username or email address</label>
                        <input 
                            type="text" 
                            id="login_field" 
                            className="form_controll" 
                            tabIndex="1"
                            autoCapitalize="off"
                            autoCorrect="off"
                            autoFocus="autofocus"
                        />
                        <label for="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="form_controll"
                            tabIndex="2"
                        />
                        <input type="submit" value="Sign in" tabIndex="3" id="submit_btn"></input>
                    </form>
                    <p className="signup-callout">
                        New to Swimmer? 
                        <a href="/"> Create an account</a>
                    </p>
                </div>
                <footer className="footer">
                    <ul>
                        <li><a href="#terms">Terms</a></li>
                        <li><a href="#terms">Privacy</a></li>
                        <li><a href="#terms">Security</a></li>
                        <li><a href="#terms">Contact Swimmer</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default AuthForm