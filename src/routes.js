import {
    createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Auth from './features/auth/AuthScreen'
import Home from './features/home/Home.container'
import Register from './features/register/Register.container'
import Login from './features/login/Login.container'
import Landing from './features/landing/Landing.container'
import ForgotPassword from './features/forgotPassword/ForgotPassword.container'

const RootStack = createStackNavigator({
    Auth: {
        screen: Auth,
        navigationOptions: {
            header: null,
        },
    },
    Landing: {
        screen: Landing,
        navigationOptions: {
            header: null,
        },
    },
    Register: {
        screen: Register,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        },
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    }
}, {
    initialRouteName: 'Auth',
});
const NavigationStack = createAppContainer(RootStack)
export default NavigationStack;
