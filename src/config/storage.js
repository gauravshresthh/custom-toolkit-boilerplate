import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken = async token => {
	try {
		const tokenToStore = JSON.stringify(token);
		await AsyncStorage.setItem('@storage_Key', tokenToStore);
	} catch (e) {
		console.log('error storing token', e);
	}
};

const getToken = async () => {
	try {
		const token = await AsyncStorage.getItem('@storage_Key');
		return token != null ? token : null;
	} catch (e) {
		console.log('error getting token', e);
	}
};

const removeToken = async () => {
	try {
		await AsyncStorage.removeItem('token');
	} catch (e) {
		console.log('error removing token', e);
	}

	console.log('Done.');
};

export { storeToken, getToken, removeToken };
