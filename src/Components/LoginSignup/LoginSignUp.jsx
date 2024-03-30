import React, { useState } from 'react'
import "./LoginSignUp.css"
import user_icon from "../Assets/person.png"
import email_icon from "../Assets/email.png"
import password_icon from "../Assets/password.png"

export default function LoginSignUp() {
    const [action, setAction] = useState("Sign up")
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <></> : <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" className="text" placeholder="Name" />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" className="text" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" className="text" placeholder="Password" />
                </div>
            </div>
            {action === "Sign Up" ? <></> : <div className="forgot-password">Lost password ? <span>Click Here !</span></div>}
            <div className="submit-container">
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
            </div>
        </div>
    )
}
