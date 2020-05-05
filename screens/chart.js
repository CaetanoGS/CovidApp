import React from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Header } from 'react-native-elements';
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';


class ChartPlot extends React.Component{


    render(){

        return (

            <SafeAreaView>
                <ScrollView>
                <Chart />
                </ScrollView>
            </SafeAreaView>
        )

    }
}

export default ChartPlot;

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})