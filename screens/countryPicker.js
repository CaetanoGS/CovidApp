import React, { Component } from 'react'
import { StyleSheet, Dimensions, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { fetchData, fetchCountries, fetchCountriesData } from './api';
import DropdownMenu from 'react-native-dropdown-menu';
import { BarChart } from 'react-native-chart-kit';





class Country extends Component {

    // Constructor to save the data

    state = {
        countries: [],
        confirmed: {},
        recovered: {},
        deaths: {},
        country: null,
    }

    // Get the countries list

    async componentDidMount() {

        const fetchedCountries = await fetchCountries();

        const firstOption = ['Please Select a Country'];

        this.setState({ countries: [].concat(firstOption, fetchedCountries) });

    }

    // Use the country selected to get data from this region

    handleCountryChange = async (country) => {

        this.state.country = country;

        if(country == 'Global' || country == null){ 
            country = null;
        }

        const fetchedCountriesData = await fetchCountriesData(country);

        this.setState({ confirmed: fetchedCountriesData.confirmed, recovered: fetchedCountriesData.recovered, deaths: fetchedCountriesData.deaths });

    }


    render() {

        // Get the countries Array from state

        var countries = [this.state.countries];

        // Separate the variables to insert in a new array

        let confirmedCases = this.state.confirmed.value;
        let recoveredCases = this.state.recovered.value;
        let deathsCases = this.state.deaths.value;

        // Clean the variables to insert in a Bar chart

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


        // Data for Bar chart

        const data = {
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                data: [confirmedCases, recoveredCases, deathsCases]
            }]
        }

        // Inserting data in the constructor
        
        if(this.state.country == null)
            this.state.country = 'Global';

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
                            {this.state.country} Situation
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
                                decimalPlaces: 3,
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
                            data={countries}
                            maxHeight={200}
                            handler={(selection, row) => this.handleCountryChange(countries[selection][row])}
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