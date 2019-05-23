import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	TextInput,
	View,
	ImageBackground,
	TouchableOpacity,
	Alert
} from 'react-native';

import backgroundImg from './assets/imgs/fotoBackground.png'

export default class Produto extends Component {

    render() {
		return (
            <ImageBackground source={backgroundImg} style={styles.background}>
                <Text style={styles.title}>Tela de Produtos</Text>
                
            </ImageBackground>
		);
	}
}

const styles = StyleSheet.create({

	background: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	}
})