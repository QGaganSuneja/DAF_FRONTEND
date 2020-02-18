import './header.scss';
import { Link, withRouter } from 'react-router-dom';
const Header = () => (
	<nav className="navbar navbar-expand-sm " style={{ fontFamily: 'Rubik' }}>
		<Link className="navbar-brand logo-url-spacing" to="/home">
			<img src="../../assets/logo.png"></img>
		</Link>
		<ul className="navbar-nav color-black url-spacing">
			<li className="nav-item">
				<Link className="nav-link" to="/home">
					HOME
				</Link>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					ABOUT US
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					OUR VISION
				</a>
			</li>
			<li className="nav-item">
				<Link className="nav-link" to="/course">
					THE COURSE
				</Link>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					RESOURCES
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="#">
					CONTACT
				</a>
			</li>
		</ul>
	</nav>
);
export default Header;
