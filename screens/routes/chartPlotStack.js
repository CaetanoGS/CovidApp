import { createStackNavigator } from 'react-navigation-stack';
import Global from '../chart';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Global: {
        screen: Global,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Global Situation'/>,
            }
        }
    },
};
const ChartStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5b262c'}
    }
});

export default ChartStack;
