import { createStackNavigator } from 'react-navigation-stack';
import Country from '../countryPicker';
import Header from '../shared/header';
import React from 'react';


const screens = {
    Country: {
        screen: Country,
        navigationOptions: ({ navigation }) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Country Situation'/>,
            }
        }
    },
};
const CountryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#5b262c'}
    }
});

export default CountryStack;
