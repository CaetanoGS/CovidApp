import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native'
import { Card } from 'react-native-elements';




const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {
        return (
            <Text>Loading ...</Text>
        );
    }

    var NumberFormat = require('react-number-format');

    return (

        <SafeAreaView>
            <ScrollView>
                <View>
                    <Card
                        title="Number of active cases of COVID-19"
                        image={require('../../images/confirmed.jpg')}
                        style={{ card: { backgroundColor: 'red' } }}>
                        <Text style={styles.number}>{
                            confirmed.value.toLocaleString('pt-BR')
                        }</Text>
                        <Text style={styles.date}> {new Date(lastUpdate).toDateString()} </Text>

                    </Card>

                    <Card title="Number of recoveries cases from COVID-19"
                        image={require('../../images/recovered.jpg')}
                        style={styles.recovered}>
                        <Text style={styles.number}>{recovered.value.toLocaleString('pt-BR')}</Text>
                        <Text style={styles.date}>{new Date(lastUpdate).toDateString()}</Text>

                    </Card>

                    <Card title="Number of deaths caused by COVID-19"
                        image={require('../../images/deaths.jpg')}
                        style={styles.deaths}>
                        <Text style={styles.number}>{deaths.value.toLocaleString('pt-BR')}</Text>
                        <Text style={styles.date}>{new Date(lastUpdate).toDateString()}</Text>

                    </Card>

                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    number: {
        textAlign: 'center', // <-- the magic
        fontWeight: 'bold',
        fontSize: 20,
    },

    date: {
        textAlign: 'center',

    }
})

export default Cards;

