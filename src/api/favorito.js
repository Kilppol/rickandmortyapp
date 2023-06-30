import AsyncStorage from '@react-native-async-storage/async-storage';
import { includes, pull } from 'lodash';
import { FAVORITE_STORAGE } from '../utils/constants';

//Crear la funcion que trae los favoritos

export const getFavoriteApi = async () => {
	try {
		const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
		return response;
	} catch (error) {
		console.log(error);
	}
};

//Crear la funcion que añade a Favoritos
export const addFavoriteApi = async (id) => {
	try {
		const favorites = [];
		favorites.push(id);
		await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
	} catch (error) {
		console.log(error);
	}
};
