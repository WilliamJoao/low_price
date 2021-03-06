// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
// 	Platform,
// 	StyleSheet,
// 	Text,
// 	TextInput,
// 	View,
// 	ImageBackground,
// 	TouchableOpacity,
// 	Alert
// } from 'react-native';

// import backgroundImg from './assets/imgs/fotoBackground.png'

// export default class App extends Component {

// 	// objeto para autenticação
// 	state = {
// 		stageNew: false,
// 		name: '',
// 		email: '',
// 		password: '',
// 		confirmPassword: '',
// 	}

// 	// funcao que verifica se o usuario quer logar ou criar conta
// 	signinOrSignup = () => {

// 		(this.state.stageNew) ? Alert.alert('Sucesso!', "Criar conta") : Alert.alert('Sucesso!', "Logar")
// 	}

// 	render() {
// 		return (

// 			<ImageBackground source={backgroundImg} style={styles.background}>
// 				<Text style={styles.title}>Projeto TCC</Text>
// 				<View >
					
// 					{/*  verificação de qual tela será exibida */}
// 					<Text style={styles.subtitle}>
						
// 						{this.state.stageNew ? "Criar a sua conta" : "Informar seus dados"}
// 					</Text>

// 					{/* ( condicional i )se condição this.state.stageNew for true executa o textinput, caso contrario será ignorado  */}
// 					{this.state.stageNew && <TextInput placeholder='Nome' style={styles.input} value={this.state.name} onChangeText={ name => this.setState({ name })} />}

// 					{/*  os componentes email e senha aparecera nas telas de login e cadastro, logo nao precisa estar dentro do condicional i */}
// 					<TextInput placeholder='E-mail' style={styles.input} value={this.state.email} onChangeText={ email => this.setState({ email })}/>
// 					<TextInput placeholder='Senha' style={styles.input} value={this.state.password} onChangeText={ password => this.setState({ password })}/>

// 					{this.state.stageNew && <TextInput placeholder='Confirmação' style={styles.input} value={this.state.confirmPassword} onChangeText={ confirmPassword => this.setState({ confirmPassword })} />}

// 					{/*  Botao de confirmaçao */}
// 					<TouchableOpacity onPress={this.signinOrSignup}>
// 						<View style={styles.button}>
// 							<Text style={styles.buttonText}> {this.state.stageNew ? 'Registrar' : 'Entrar'} </Text>
// 						</View>
// 					</TouchableOpacity>

// 					<TouchableOpacity style={{padding: 10}} onPress={() => this.setState({ stageNew: !this.state.stageNew })}>
// 						<Text style={styles.button}>{this.state.stageNew ? "Já possui conta?" : "Ainda não possui conta?"}</Text> 
// 					</TouchableOpacity>
// 				</View>
// 			</ImageBackground>
// 		)
// 	}
// }

// const styles = StyleSheet.create({

// 	background: {
// 		flex: 1,
// 		width: '100%',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},

// 	title: {
// 		color: '#000',
// 		fontSize: 70,
// 		marginBottom: 10,
// 	},

// 	subtitle: {
// 		color: '#FFF',
// 		fontSize: 20,
// 	},

// 	formContainer: {
// 		backgroundColor: 'rgba(0,0,0,0.3)',
// 		padding: 20,
// 		width: '90%',
// 	},
	
// 	input: {
// 		marginTop: 10,
// 		backgroundColor:'#FFF',
// 	},

// 	button: {
// 		backgroundColor: '#080',
// 		marginTop: 10,
// 		padding: 10,
// 		alignItems: 'center',
// 	},

// 	buttonText: {
// 		color: '#FFF',
// 		fontSize: 20,
// 	}
// });
