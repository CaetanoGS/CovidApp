import React from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Header } from 'react-native-elements';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';


class Country extends React.Component{

    render(){

        return (

            <SafeAreaView>
                <ScrollView>
                <CountryPicker />
                </ScrollView>
            </SafeAreaView>
        )

    }
}

export default Country;

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})