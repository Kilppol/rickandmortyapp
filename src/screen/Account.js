import { View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import UserData from '../components/Auth/UserData';
import Loginform from '../components/Auth/Loginform';
import useAuth from '../hooks/useAuth';

export default function Account(props) {
	const { navigation } = props;
	const { auth } = useAuth();
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
export function ItemMenu(props) {
	const { title, text } = props;
	return (
		<View>
			<Text>{title} </Text>
			<Text>{text} </Text>
		</View>
	);
}
