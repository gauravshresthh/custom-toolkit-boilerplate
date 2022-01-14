import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import LocalDb from '../utils/localDb';

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (LocalDb.getSessions()) {
					return (
						<Redirect
							to={{
								pathname: localStorage.getItem('location')
									? localStorage.getItem('location')
									: '/messages/1/list',
							}}
						/>
					);
				}
				return <Component {...props} />;
			}}
		/>
	);
};

PublicRoute.propTypes = {
	component: PropTypes.any,
};

export default PublicRoute;
