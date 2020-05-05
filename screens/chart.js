import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { Chart } from './components';
import { fetchDailyData } from './api';


class ChartPlot extends React.Component {


    state = {
        data: [],
    }

    async componentDidMount(){

        const fetchedData = await fetchDailyData();

        this.setState( { data:fetchedData } );

    }

render() {

    const { data } = this.state;

    if (!data[0]) {
        return (
            <Text>Loading ...</Text>
        );
    }

    console.log(data.map((data) => data.confirmed));

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