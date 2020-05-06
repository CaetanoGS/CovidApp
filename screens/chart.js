import React from 'react';
import { StyleSheet, View } from 'react-native';
import { fetchDailyData } from './api';
import { ECharts } from "react-native-echarts-wrapper";




export default class ChartPlot extends React.Component {



    state = {
        data: [],
    }

    async componentDidMount() {

        const fetchedData = await fetchDailyData();

        this.setState({ data: fetchedData });

    }


    option = {
        title: {
            text: 'Global'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Confirmed', 'Deaths']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: [null]
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Deaths',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [null]
            },
            {
                name: 'Confirmed',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [null]
            }
        ]
    };


    render() {


        //https://echarts.apache.org/examples/en/ 
        const { data } = this.state;

        const confirmed = data.map((data) => data.confirmed);
        const deaths = data.map((data) => data.deaths);
        const date = data.map((data) => data.date);

        this.option.series[0].data = deaths;
        this.option.series[1].data = confirmed;
        this.option.xAxis[0].data = date;


        return (
            <View style={styles.chartContainer}>
                <ECharts
                    option={this.option}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1
    }
});