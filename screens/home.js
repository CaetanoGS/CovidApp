import React from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Cards } from './components';
import { fetchData } from './api';



class Home extends React.Component{

    // Constructor to save data

    state = {
        data: {},
    }

    // Get data and set the data

    async componentDidMount(){

        const fetchedData = await fetchData();

        this.setState( { data:fetchedData } );

    }

    render(){

        // Get data from constructor

        const { data } = this.state;

        return (

            <SafeAreaView style={{backgroundColor: '#fff'}}>
                <ScrollView style={{backgroundColor: '#fff' }}>
                    <Cards data={data}/>
                </ScrollView>
            </SafeAreaView>
        )

    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})