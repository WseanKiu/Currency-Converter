import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../containers/Home';
import CurrencyList from '../containers/CurrencyList';
import Options from '../containers/Options';
import Themes from '../containers/Themes';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                header: () => null,
                headerTitle: 'Home',
            },
        },
        Options: {
            screen: Options,
            navigationOptions: {
                headerTitle: 'Options',
            },
        },
        Themes: {
            screen: Themes,
            navigationOptions: {
                headerTitle: 'Themes',
            },
        },
    },
    {
        headerMode: 'screen',
    },
);

const CurrencyListStack = createStackNavigator(
    {
        CurrencyList: {
            screen: CurrencyList,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.title,
            }),
        },
    },
);

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeStack,
            navigationOptions: {
                header: () => null,
            },
        },
        CurrencyList: {
            screen: CurrencyListStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        // cardStyle: { paddingTop: StatusBar.currentHeight },
    },
);

export default createAppContainer(RootStack);
