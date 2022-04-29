import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import color from "../utils/color";

function HomeTitle(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top News</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30,
        marginBottom: 30,
        justifyContent: 'center',
        backgroundColor: color.background,
        
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#fff',
    }
})

export default HomeTitle;