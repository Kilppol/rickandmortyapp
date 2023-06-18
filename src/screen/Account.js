import { View, SafeAreaView } from 'react-native';
import React from 'react';
import UserData from '../components/Auth/UserData';
import Loginform from '../components/Auth/Loginform';

export default function Account() {
	const auth = null;
	return <SafeAreaView>{auth ? <UserData /> : <Loginform />}</SafeAreaView>;
}
