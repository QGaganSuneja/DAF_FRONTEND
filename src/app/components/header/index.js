import './header.scss';
import { Link, withRouter } from 'react-router-dom';
const Header = () => (
	<nav className="navbar navbar-expand-sm " style={{ fontFamily: 'Rubik' }}>
		<a className="navbar-brand logo-url-spacing" href="#">
			<img src="../../assets/logo.png"></img>
		</a>
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
				<Link className="nav-link" to="/login">
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
