import React, { Component, Animated, useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { fetchCountries } from './api';
import DropdownMenu from 'react-native-dropdown-menu';
import { ECharts } from "react-native-echarts-wrapper";




class Country extends React.Component {

    state = {
        countries: []
    }

    async componentDidMount() {

        const fetchedCountries = await fetchCountries();

        this.setState({ countries: fetchedCountries });

    }

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };

    render() {

        var data = [this.state.countries];

        if (data.length == 0) {
            return (
                <Text> Loading ... </Text>
            )
        }else{

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{height: 100, backgroundColor: '#fff'}}>
                <ScrollView style={{ flex: 1, height: 5}}>
                    <DropdownMenu
                        style={{ flex: 1 }}
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        data={data}
                        maxHeight={200} 
                        handler={(selection, row) => this.setState({text: data[selection][row]})}
                    >
                    </DropdownMenu>
                </ScrollView>

                </View>

                <ECharts
                    option={this.option}
                />

            </SafeAreaView>
        );
    }

    }
}

export default Country;

const styles = StyleSheet.create({


});