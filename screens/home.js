import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import axios from 'axios';

export default function Home() {

    axios.get('https://covid19.mathdro.id/api')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

    return (

        <View style={styles.container}>
            <Cards />
            <Chart />
            <CountryPicker />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})