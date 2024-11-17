import { Link } from "react-router-dom";
import "./App.css"

export default function Login() {
    async function submitLoginRequest() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const encodedUrl = encodeURI(`http://localhost:3000/api/auth/login/${email}/${password}`);
        const response = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
    }

    async function submitRegisterRequest() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const encodedUrl = encodeURI(`http://localhost:3000/api/auth/register/${email}/${password}`);
        const response = await fetch(encodedUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 400) {
            alert("User already exists");
            return;
        }
        else {
            alert("User created");
        }
        const data = await response.json();
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", email);
    }
        return (
            <>
                <br />
                <div className="auth-box">
                    <h1>Login or Register</h1>
                    <div id="login-form">
                        <input type="email" name="email" id="email" placeholder="Email" />
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <button id="login-button" type="button" onClick={submitLoginRequest}>Login</button>
                        <div>or</div>
                        <button id="register-button" type="button" onClick={submitRegisterRequest}>Register</button>
                    </div>
                </div>
            </>

        )

}