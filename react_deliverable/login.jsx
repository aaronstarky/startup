import "./App.css"

export default function Login() {
    return (
        <div>
            <div class="auth-box">
                <h3>Login</h3>
                <div id="login-form">
                    <label id="userlabel" for="username">Username:</label>
                    <input type="text" name="username" id="username"/>
                    <label id="passlabel" for="password">Password:</label>
                    <input type="text" name="password" id="password"/>
                </div>
            </div>
        </div>
    )
}