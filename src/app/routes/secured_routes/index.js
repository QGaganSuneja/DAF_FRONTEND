import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const SecuredRoute = ({ userLoggedIn, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				userLoggedIn === true ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: props.location } }}
					></Redirect>
				)
			}
		></Route>
	);
};

function mapStateToProps(state) {
	return {
		userLoggedIn: state.user.userLoggedIn
	};
}

export default connect(mapStateToProps)(SecuredRoute);
