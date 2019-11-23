import {
    createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Auth from './features/auth/AuthScreen'
import Home from './features/home/Home.container'
import Register from './features/register/Register.container'
import Login from './features/login/Login.container'

const RootStack = createStackNavigator({
    Auth: {
        screen: Auth,
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
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    }
}, {
    initialRouteName: 'Login',
});
const NavigationStack = createAppContainer(RootStack)
export default NavigationStack;
