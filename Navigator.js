// import React from 'react'
import { createSwitchNavigator } from 'react-navigation'
import Produto from './Produto'
import Login from './src/screens/Login'

const MainRoutes = {
    Login : {
        name: 'Login',
        screen: Login
    },

    Home: {
        name: 'Home',
        screen: Produto
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Login'
})

export default MainNavigator