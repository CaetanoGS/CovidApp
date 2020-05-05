import { createStackNavigator } from 'react-navigation-stack';
import Home from '../home';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Corona Tracker'/>,
            }
        }
    },
};
const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5b262c'}
    }
});

export default HomeStack;
