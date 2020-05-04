import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';


class Home extends React.Component{

    async componentDidMount(){

        const data = await fetchData();

        console.log(data);
    }

    render(){

        return (

            <View style={styles.container}>
                <Cards />
                <Chart />
                <CountryPicker />
            </View>
        )

    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})