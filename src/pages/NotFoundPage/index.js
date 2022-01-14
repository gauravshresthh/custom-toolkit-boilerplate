/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import styled from 'styled-components';
import SubmitButton from '../../components/elements/Button/SubmitButton';
import CommonIcons from '../../assets/images/common/CommonIcons';
import { useHistory } from 'react-router-dom';

const StyledNotFound = styled.div`
	height: calc(100vh - 52px);
	display: flex;
	align-items: center;
	justify-content: center;

	.content-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.title {
		font-weight: bold;
		font-size: 34px;
		color: #376af5;
		margin-top: 5px;
	}

	.description {
		margin: 10px 0 20px 0;
		color: #666;
	}
`;

export default function NotFound() {
	const history = useHistory();
	return (
		<StyledNotFound>
			<div className="content-wrapper">
				<CommonIcons.AnydoneLogo width="55px" height="57px" />
				<div className="title">404 - Page not found</div>
				<div className="description">
					Sorry we can’t find the page you are looking for
				</div>
				<SubmitButton
					text="BACK TO HOMEPAGE"
					width="210px"
					onClick={() => history.push('/')}
				/>
			</div>
		</StyledNotFound>
	);
}
