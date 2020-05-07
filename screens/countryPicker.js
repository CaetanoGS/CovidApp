import React, { Component, Animated, useState, useEffect } from 'react'
import { StyleSheet, Dimensions, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { fetchCountries, fetchCountriesData } from './api';
import DropdownMenu from 'react-native-dropdown-menu';
import { ECharts } from "react-native-echarts-wrapper";
import { CountryPicker } from './components';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit';





class Country extends React.Component {

    state = {
        countries: [],
        confirmed: {},
        recovered: {},
        deaths: {}
    }

    async componentDidMount() {

        const fetchedCountries = await fetchCountries();

        this.setState({ countries: fetchedCountries });

    }

    handleCountryChange = async (country) => {

        const fetchedCountriesData = await fetchCountriesData(country);

        this.setState({ confirmed: fetchedCountriesData.confirmed, recovered: fetchedCountriesData.recovered, deaths: fetchedCountriesData.deaths });

    }


    render() {

        var data1 = [this.state.countries];

        const dataCountry = this.state.confirmed;

        let confirmedCases = this.state.confirmed.value;
        let recoveredCases = this.state.recovered.value;
        let deathsCases = this.state.deaths.value;

        const dataCases = [confirmedCases, recoveredCases, deathsCases];

        console.log(dataCases);

        if (confirmedCases == null)
            confirmedCases = null;
        else
            confirmedCases = confirmedCases / 1000;
        if (recoveredCases == null)
            recoveredCases = null;
        else
            recoveredCases = recoveredCases / 1000;
        if (deathsCases == null)
            deathsCases = null;
        else
            deathsCases = deathsCases / 1000;



        const data = {
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                data: [confirmedCases, recoveredCases, deathsCases]
            }]
        }


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView style={{ flex: 1, height: 5 }}>
                    <View style={{ height: 500, backgroundColor: '#fff' }}>

                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 18,
                                padding: 16,
                                marginTop: 16,
                            }}>
                            Bar Chart
                        </Text>

                        <BarChart

                            data={data}
                            width={Dimensions.get('window').width - 0}
                            height={450}
                            yAxisLabel={'k'}
                            chartConfig={{
                                backgroundColor: "transparent",
                                backgroundGradientFrom: '#ffffff00',
                                backgroundGradientTo: '#fff',
                                strokeWidth: 2,
                                decimalPlaces: 1,
                                color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                                left: 0,
                            }}
                        />


                    </View>

                    <View style={{ height: 200, backgroundColor: '#fff' }}>

                        <DropdownMenu
                            style={{ flex: 1 }}
                            bgColor={'white'}
                            tintColor={'#666666'}
                            activityTintColor={'green'}
                            data={data1}
                            maxHeight={200}
                            handler={(selection, row) => this.handleCountryChange(data1[selection][row])}
                        >
                        </DropdownMenu>


                    </View>
                </ScrollView>

            </SafeAreaView>
        );

    }
}

export default Country;

const styles = StyleSheet.create({


});