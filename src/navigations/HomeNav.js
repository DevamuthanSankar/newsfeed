import React, {useEffect} from 'react';
import color from "../utils/color";
import News from "../screens/News";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import {setTabVisible} from "../stores/tabNavStore";
import {useDispatch} from "react-redux";

const Stack = createNativeStackNavigator();

function HomeNav(props) {

    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={Home} options={options('Top News')}/>
            <Stack.Screen name="News" component={News} options={options('News')}/>
        </Stack.Navigator>
    );
}

const options = (title) => {
    const options = {
        title: title,
        headerStyle: {
            backgroundColor: color.background
        },
        headerTintColor: color.white,
    }
    return options
}

export default HomeNav;
