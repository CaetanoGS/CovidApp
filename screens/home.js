import React from 'react'
import { StyleSheet, View, Text, ScrollView, SafeAreaView } from 'react-native'
import { Cards } from './components';
import { fetchData } from './api';


class Home extends React.Component{

    state = {
        data: {},
    }

    async componentDidMount(){

        const fetchedData = await fetchData();

        this.setState( { data:fetchedData } );

    }

    render(){

        const { data } = this.state;

        return (

            <SafeAreaView>
                <ScrollView>
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