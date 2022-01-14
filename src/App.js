import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './GlobalStyles.css';
import 'antd/dist/antd.css';
import './assets/styles/css/main.css';

import PublicRoute from './routes/PublicRoute';
// import PrivateRoute from './routes/PrivateRoute';
import Spinner from './components/elements/Spinner';
const Login = lazy(() => import('./pages/Login'));
const Users = lazy(() => import('./pages/Users'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Spinner />}>
				<Switch>
					<PublicRoute exact path="/" from component={Login} />
					<PublicRoute path="/login" from component={Login} />
					<PublicRoute path="" component={NotFoundPage} />
					<Route path="users/*" element={<Users />} />
				</Switch>
			</Suspense>
		</BrowserRouter>
	);
}
