import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Header } from 'react-native-elements';
import { CountryPicker } from './components';
import { fetchCountries } from './api';
import DropdownMenu from 'react-native-dropdown-menu';



class Country extends React.Component {

    state = {
        countries: [],
        text: ''
    }

    async componentDidMount() {

        const fetchedCountries = await fetchCountries();

        this.setState({ countries: fetchedCountries });

    }


    render() {

        var data = [this.state.countries];

        if (data.length == 0) {
            return (
                <Text> Loading ... </Text>
            )
        }

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <DropdownMenu
                        style={{ flex: 1 }}
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        data={data}
                        maxHeight={300} 
                        handler={(selection, row) => this.setState({text: data[selection][row]})}
                    >
                    </DropdownMenu>

                </ScrollView>

                <Text>
              {this.state.text} is the best language in the world
            </Text>

                

            </SafeAreaView>
        );

    }
}

export default Country;

const styles = StyleSheet.create({
    container: {

    },

    dropbown: {
        height: 50,
        width: 150
    }


})