import {
    createAppContainer
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Auth from './features/auth/AuthScreen'
import Home from './features/home/Home.container'
import Register from './features/register/Register.container'
import Login from './features/login/Login.container'
import Landing from './features/landing/Landing.container'
import Settings from './features/settings/Settings.container'
import Connect from './features/connect/Connect.container'
import ContactUs from './features/contactUs/ContactUs.container'
import Grow from './features/grow/Grow.container'
import ShopDonate from './features/shopDonate/ShopDonate.container'
import SquareupStore from './features/shopDonate/SquareupStore'
import ToolKit from './features/grow/ToolKit'
import Info from './features/grow/Info'
import Workshop from './features/workshops/Workshops.container'
import WorkshopRegister from './features/workshopRegister/WorkshopRegister.container'
import Verification from './features/verification/Verification.container'

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
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    Connect: {
        screen: Connect,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    ContactUs: {
        screen: ContactUs,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    Grow: {
        screen: Grow,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    ToolKit: {
        screen: ToolKit,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    Info: {
        screen: Info,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    ShopDonate: {
        screen: ShopDonate,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    SquareupStore: {
        screen: SquareupStore,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    Workshop: {
        screen: Workshop,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    WorkshopRegister: {
        screen: WorkshopRegister,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    },
    Verification: {
        screen: Verification,
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#3b4761"
        },
        headerTintColor: "#ffffff"
        }
    }
}, {
    initialRouteName: 'Auth',
});
const NavigationStack = createAppContainer(RootStack)
export default NavigationStack;
