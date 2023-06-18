import { View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import UserData from '../components/Auth/UserData';
import Loginform from '../components/Auth/Loginform';

export default function Account(props) {
	const { navigation } = props;
	const [auth, setAuth] = useState(null);

	return (
		<SafeAreaView>
			{auth ? (
				<UserData auth={auth} />
			) : (
				<Loginform navigation={navigation} setAuth={setAuth} />
			)}
		</SafeAreaView>
	);
}
