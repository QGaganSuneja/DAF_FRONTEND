import React from 'react';
import { FormInput } from '../buttons/index';
import { connect } from 'react-redux';
import { login } from './action';
class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { email: '', password: '', isForgotPassword: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
		this.submitForgotPassword = this.submitForgotPassword.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		const payload = {
			email: this.state.email,
			password: this.state.password
		};

		this.props.login(payload).then(() => {
			this.props.history.push('/chapter/1');
		});
		// this.props.history.push('/chapter/1');
	}
	forgotPassword() {
		this.setState({ email: '', isForgotPassword: true });
	}
	submitForgotPassword() {}
	render() {
		return (
			<div className="row no-gutters">
				<div className="col-lg-3"></div>
				<div className="col">
					<form onSubmit={this.handleSubmit} className="form-container">
						<h1>Teacher Login</h1>
						{/* <label htmlFor="username"> Username</label> */}
						<FormInput
							type="text"
							placeholder="Username"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
							classes="form-input"
						/>
						{!this.state.isForgotPassword && (
							<FormInput
								type="password"
								placeholder="Password"
								name="password"
								value={this.state.password}
								classes="form-input"
								onChange={this.handleChange}
							/>
						)}
						<div className="row no-gutters">
							<input
								type="submit"
								value="Login"
								className="btn btn-primary col-lg-6 form-submit"
							/>
							<div className="col-lg-6 frgt-container">
								<p className="frgt-text">
									<a href="#" onClick={this.forgotPassword}>
										Forgot Password?
									</a>
								</p>
							</div>
						</div>
						{this.state.isForgotPassword && (
							<div className="row no-gutters">
								<button
									onClick={this.submitForgotPassword}
									className="btn btn-primary col-lg-12 form-submit"
								>
									Submit
								</button>
							</div>
						)}
					</form>
				</div>
				<div className="col-lg-3"></div>
			</div>
		);
	}
}

export default connect(null, { login })(LoginForm);
