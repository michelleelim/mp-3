import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/leadership">Leadership</Link></li>
                <li><Link to="/skills">Skills</Link></li>
            </ul>
        </nav>
    );
}