import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import UserData from '../components/Auth/UserData';

export default () => useContext(AuthContext);

export function AuthProvider(props) {
	const { children } = props;
	const [auth, setAuth] = useState(undefined);

	const login = (UserData) => {
		setAuth();
	};
	const logout = () => {
		setAuth(undefined);
	};

	const valueContext = {
		auth,
		login,
		logout,
	};
}
