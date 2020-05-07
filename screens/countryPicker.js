import React, { Component, Animated, useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { fetchCountries, fetchCountriesData } from './api';
import DropdownMenu from 'react-native-dropdown-menu';
import { ECharts } from "react-native-echarts-wrapper";




class Country extends React.Component {

    state = {
        countries: [],
        countriesData: {},
        confirmed: null,
        recovered: null,
        deaths: null
    }

    async componentDidMount() {

        const fetchedCountries = await fetchCountries();

        this.setState({ countries: fetchedCountries });

    }

    handleCountryChange = async (country) => {

        const fetchedCountriesData = await fetchCountriesData(country);

        this.setState({ countriesData: fetchedCountriesData });
        this.setState({ confirmed: fetchedCountriesData.confirmed.value });
        this.setState({ recovered: fetchedCountriesData.recovered.value });
        this.setState({ deaths: fetchedCountriesData.deaths.value });


        //console.log(country);

    }

    option = {
        xAxis: {
            type: 'category',
            data: [{
                value: ['Confirmed'],
            },{
                value: ['Recovered'],
            },{
                value: ['Deaths']
            }]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [],
            type: 'bar',
            color: ['Dark', 'Yellow', 'Blue'],
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
            }
        }]
    };

    render() {

        var data = [this.state.countries];

        var dataBar = [];

        if(this.state.confirmed == null || this.state.recovered == null || this.state.recovered == null){ 
            dataBar = [1, 2, 3];
            this.option.series[0].data = dataBar;
        }else{ 
            dataBar.push(this.state.confirmed, this.state.recovered, this.state.deaths);
            this.option.series[0].data = dataBar;
        }

        console.log(dataBar);



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
                        handler={(selection, row) => this.handleCountryChange(data[selection][row])}
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