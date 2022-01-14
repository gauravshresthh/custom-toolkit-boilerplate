import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocalDb from '../utils/localDb';

export const PrivateRoute = ({ component: Component, key, ...rest }) => {
	return (
		<Route
			key={key}
			{...rest}
			render={props => {
				if (!LocalDb.getSessions()) {
					return <Redirect to="/" />;
				}
				return <Component {...props} />;
			}}
		/>
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.any,
};
export default PrivateRoute;
