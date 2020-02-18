import React from 'react';
import './index.scss';
import LoginForm from '../../components/login/index';
class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ fontFamily: 'Rubik' }}>
				<div className="flex-container">
					<div className="login-img1">
						{/* <img src="../../assets/banners/login-1.jpg" /> */}
					</div>
					<div className="login-img2">
						<LoginForm history={this.props.history} />
					</div>
					<div className="login-img3">
						{/* <img src="../../assets/banners/login-2.jpg" /> */}
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
