import { useState } from 'react';
import PropTypes from 'prop-types';
import CommonIcons from '../../assets/images/common/CommonIcons';
import InputWithLabel from '../../components/elements/InputWithLabel/InputField';
import SubmitButton from '../../components/elements/Button/SubmitButton';
import PasswordInputField from '../../components/elements/InputWithLabel/PasswordInputField';
import { StyledLogin } from './styles';

export default function Login({
	loading,
	email,
	password,
	onChange,
	login,
	props,
}) {
	return (
		<StyledLogin>
			<div className="login-wrapper">
				<CommonIcons.AnydoneLogo width="60px" height="60px" />
				<div className="login-title">Login</div>
				<div style={{ padding: '5px' }} />
				<InputWithLabel
					label="Email"
					placeholder="Enter your email"
					type="email"
					value={email}
					onKeyUp={e => {
						if (e.keyCode === 13 && email && password) {
							login(email, password);
						}
					}}
					onChange={e => {
						onChange('email', e.target.value);
					}}
				/>
				<div style={{ padding: '5px' }} />
				<PasswordInputField
					label="Password"
					placeholder="Enter your password"
					value={password}
					onChange={e => onChange('password', e.target.value)}
					onKeyUp={e => {
						if (e.keyCode === 13 && email && password) {
							login(email, password);
						}
					}}
				/>
				<div style={{ padding: '30px 0 10px 0', width: '100%' }}>
					<SubmitButton
						disable={!email || !password}
						text="Login"
						onClick={() => login(props)}
						loading={loading}
					/>
				</div>
			</div>
		</StyledLogin>
	);
}

Login.propTypes = {
	loading: PropTypes.bool,
	email: PropTypes.string,
	password: PropTypes.string,
	onChange: PropTypes.func,
	login: PropTypes.func,
};
