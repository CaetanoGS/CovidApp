import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Cards, Chart, CountryPicker } from './components';
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

            <View style={styles.container}>
                <Cards data={data}/>
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