import styled from 'styled-components';

export const StyledLogin = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgb(251, 250, 255);

	.login-wrapper {
		border-radius: 10px;
		box-shadow: rgb(0 0 0 / 8%) 0px 5px 14px 2px;
		padding: 30px 40px;
		background: #fff;
		width: 420px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.login-title {
		color: #666;
		font-size: 28px;
	}
`;
