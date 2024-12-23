import './headerStyles.css';
import "./App.css"
import './linkStyles.css';
import HeaderLink from './link';
import { useState } from 'react';

export default function Header() {
    const [user, setUser] = useState(null);

    setInterval(() => {
        if (localStorage.getItem("email")) {
            setUser(localStorage.getItem("email"));
        }
    }, 2000);

    function logout() {
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        setUser(null);
    }

    return (
        <header>
            <div className="left-side-content">
                <svg xmlns="http://www.w3.org/2000/svg" width="189" height="187" viewBox="0 0 189 187" fill="none">
                    <path d="M109 32.5V23C109 11.9543 100.046 3 89 3H23C11.9543 3 3 11.9543 3 23V107C3 118.046 11.9543 127 23 127H37C41.7635 127 45.625 130.862 45.625 135.625V172.25C45.625 179.015 51.1095 184.5 57.875 184.5C64.3643 184.5 69.625 179.239 69.625 172.75V135.125C69.625 130.638 73.2627 127 77.75 127H89C100.046 127 109 118.046 109 107V93.5M56.1632 39C54.1577 39.8526 52.2957 40.7922 50.5799 41.8059M56.1632 39L97.5327 23.1012C98.5828 22.6976 99.3962 24.067 98.5395 24.7961L82.8573 38.1427C82.0465 38.8328 82.7323 40.1436 83.7616 39.8709L132.247 27.0242C133.338 26.7353 133.998 28.1913 133.062 28.8207L111.52 43.3054C110.72 43.8437 111.07 45.0916 112.034 45.1342L159.244 47.2232C160.38 47.2734 160.564 48.8792 159.468 49.1853L136.595 55.5765C135.531 55.8738 135.663 57.4229 136.763 57.5345L185.312 62.4653C186.516 62.5875 186.509 64.3429 185.305 64.4558L136.881 68.9956C135.776 69.0991 135.637 70.6558 136.705 70.9543L159.468 77.3147C160.564 77.6208 160.38 79.2266 159.244 79.2768L112.034 81.3658C111.07 81.4084 110.72 82.6563 111.52 83.1946L133.062 97.6793C133.998 98.3087 133.338 99.7647 132.247 99.4758L83.7616 86.6291C82.7323 86.3564 82.0465 87.6672 82.8573 88.3573L98.5395 101.704C99.3962 102.433 98.5828 103.802 97.5327 103.399L56.1632 87.5M56.1632 39C54.1465 39.8682 52.2861 40.807 50.5799 41.8059M50.5799 41.8059C31.7593 52.9254 30.5305 72.9562 50.5799 84.6941M50.5799 41.8059C30.5305 53.5438 31.7593 73.5746 50.5799 84.6941M50.5799 84.6941C52.2861 85.693 54.1465 86.6318 56.1632 87.5M50.5799 84.6941C52.2957 85.7078 54.1577 86.6474 56.1632 87.5" stroke="rgb(255, 255, 255)" strokeWidth="5" />
                </svg>
                <div>
                    <h1 className="service-name">PaddleMatch</h1>
                    <div>{user}</div>
                </div>
            </div>
            <nav className="nav-buttons">
                <HeaderLink href="/login" text="LOGIN" />
                <button className="header-link" onClick={logout}>LOGOUT</button>
                <HeaderLink href="/" text="ABOUT" />
                <HeaderLink href="/matches" text="VIEW MATCHES" />
                <HeaderLink href="/setup" text="SETUP" />
            </nav>
        </header>
    )
};