import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Card} from 'react-native-elements';




const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return (
            <Text>Loading ...</Text>
        );
    }

    return (

        <SafeAreaView>
        <View>
            <Card 
                title="Number of active cases of COVID-19"
                image={require('../../images/confirmed.jpg')}
                style={{ card: { backgroundColor: 'red' }}}>
                <Text> {confirmed.value} </Text>
                <Text> {new Date(lastUpdate).toDateString()} </Text>
            </Card>

            <Card title= "Number of recoveries cases from COVID-19"
            image={require('../../images/recovered.jpg')}
            style={styles.recovered}>
                <Text>{recovered.value}</Text>
                <Text>{new Date(lastUpdate).toDateString()}</Text>

            </Card>

            <Card title="Number of deaths caused by COVID-19"
            image={require('../../images/deaths.jpg')}
            style={styles.deaths}>

                <Text>{deaths.value}</Text>
                <Text>{new Date(lastUpdate).toDateString()}</Text>

            </Card>

        </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    confirmed: {
        backgroundColor: 'red'

    },
    recovered: {
        padding: 24

    },
    deaths: {
        padding: 24

    },
})

export default Cards;

