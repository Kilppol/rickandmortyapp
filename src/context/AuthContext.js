import { View, Text } from 'react-native';
import React, { createContext, useState } from 'react';

export default function AuthContext() {
	export const AuthContext = createContext({
		auth: undefined,
	});

	export function AuthProvider(props) {
		const { children } = props;
		const [auth, setAuth] = useState(undefined);

		const valueContext = {
			auth,
		};
	}
	return (
		<AuthContext.Provider value={valueContext}>
			{children}
		</AuthContext.Provider>
	);
}
