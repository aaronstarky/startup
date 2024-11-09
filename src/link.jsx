import './linkStyles.css';
import { Link } from 'react-router-dom';

export default function HeaderLink({href, text}) {
    const ref = href;
    const myText = text;
    
    return (
        <Link class="header-link" to={href}>
            {text}
        </Link>
    )
}