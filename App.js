import { StyleSheet, StatusBar, View } from 'react-native';
import React from "react";
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';

import Home from './src/screens/Home';
import color from './src/utils/color';
import { store } from './src/stores/store';
import News from "./src/screens/News";
import Favorites from "./src/screens/Favorites";
import Tabs from "./src/navigations/Tabs";

const persist = persistStore( store );

export default function App() {

    StatusBar.setBarStyle( 'light-content' );

    return (
        <NavigationContainer>
            <Provider store={ store }>
                <PersistGate persistor={ persist }>
                    <Tabs/>
                </PersistGate>
            </Provider>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: StatusBar.currentHeight,
        backgroundColor: color.background
    },
} );