import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import { Chart } from './components';
import { fetchDailyData } from './api';
import { ECharts } from 'react-native-echarts-wrapper';



export default class ChartPlot extends React.Component {


    state = {
        data: [],
    }

    async componentDidMount() {

        const fetchedData = await fetchDailyData();

        this.setState({ data: fetchedData });

    }


    option = {
        xAxis: {
            type: 'category',
            data: [null]
        },
        yAxis: {
            type: 'value',
            data: [null]
        },
        series: [{
            type: 'line',
            data: [null],
            name: 'Confirmed Cases'
        }, {
            type: 'line',
            data: [null],
            name: 'Number of Deaths'
        }]
    };


    render() {

        const { data } = this.state;

        this.option.xAxis.data = data.map((data) => data.date);
        this.option.series[0].data = data.map((data) => data.confirmed);
        this.option.series[1].data = data.map((data) => data.deaths);


        return (
            <View style={styles.chartContainer}>
                <ECharts option={this.option}></ECharts>
            </View>
        )

    }
}

 ChartPlot;

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
        left: 5



    }
})