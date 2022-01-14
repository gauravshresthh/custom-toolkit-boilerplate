import axios from 'axios';

const baseURL = 'https://example.com/api/v1';

export default axios.create({
	baseURL,
	timeout: 5000,
});
