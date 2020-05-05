import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { Card } from 'react-native-elements';
import AnimateNumber from 'react-native-countup'

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    
    if(!confirmed){
        return (
            <Text>Loading ...</Text>
        );
    }

    return (

        <View>

            <Card style={styles.confirmed}>

                <Text> { confirmed.value } </Text>
                <Text> { new Date(lastUpdate).toDateString() } </Text>
                <Text> Number of active cases of COVID-19</Text>

            </Card>

            <Card style={styles.recovered}> 

                <Text>{ recovered.value }</Text>
                <Text>{ new Date(lastUpdate).toDateString() }</Text>
                <Text>Number of recoveries cases from COVID-19</Text>

            </Card>

            <Card style={styles.deaths}>

                <Text>{ deaths.value }</Text>
                <Text>{ new Date(lastUpdate).toDateString() }</Text>
                <Text>Number of deaths caused by COVID-19</Text>

            </Card>

        </View>

    );
}

export default Cards;

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    confirmed:{
        color: "#0000ff"

    },
    recovered:{

    },
    deaths:{

    }
})