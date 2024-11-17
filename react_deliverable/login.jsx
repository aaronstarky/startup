import { Link } from "react-router-dom";
import "./App.css"

export default function Login() {
    async function submitLoginRequest() {
        const email = document.getElementById("email-log").value;
        const password = document.getElementById("password-log").value;

        const response = await fetch(`/api/auth/login/${email}/${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
    }

    async function submitRegisterRequest() {
        const email = document.getElementById("email-reg").value;
        const password = document.getElementById("password-reg").value;

        const response = await fetch(`/api/auth/login/${email}/${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        localStorage.setItem("token", data.token);
    }
        return (
            <>
                <br />
                <div className="auth-box">
                    <h1>Login or Register</h1>
                    <form id="login-form">
                        <input type="email" name="email-log" id="email-log" placeholder="Email" />
                        <input type="password" name="password-log" id="password-log" placeholder="Password" />
                        <button id="login-button" type="button" onClick={submitLoginRequest}>Login</button>
                        <div>or</div>
                        <button id="register-button" type="button" onClick={submitRegisterRequest}>Register</button>
                    </form>
                </div>
            </>

        )

}