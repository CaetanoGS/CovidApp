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

            <Card>

                <Text> <AnimateNumber value={ confirmed.value } interval={15} steps={66}/> </Text>
                <Text> { new Date(lastUpdate).toDateString() } </Text>
                <Text> Number of active cases of COVID-19</Text>

            </Card>

            <Card>

                <Text><AnimateNumber value={ recovered.value } interval={15} steps={66}/></Text>
                <Text>{ new Date(lastUpdate).toDateString() }</Text>
                <Text>Number of recoveries cases from COVID-19</Text>

            </Card>

            <Card>

                <Text><AnimateNumber value={ deaths.value } interval={15} steps={66}/></Text>
                <Text>{ new Date(lastUpdate).toDateString() }</Text>
                <Text>Number of deaths caused by COVID-19</Text>

            </Card>

        </View>

    );
}

export default Cards;