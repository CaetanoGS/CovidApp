import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header({ navigation, title }) {

    const openMenu = () => {

        navigation.openDrawer();

    }
    return (
        <View style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View>
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        resizeMode: 'stretch',
                    }}
                    source={require('../images/covidIcon.png')}
                />
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        letterSpacing: 1,
    },

    icon: {
        position: 'absolute',
        left: -90,
        color: '#fff',
    },
});