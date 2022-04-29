import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Favorites from "../screens/Favorites";
import News from "../screens/News";
import color from "../utils/color";

const Stack = createNativeStackNavigator();

function FavoriteNav(props) {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"FavoriteStack"} component={Favorites} options={{
                title: 'Favorites',
                headerStyle: {
                    backgroundColor: color.background
                },
                headerTintColor: color.white
            }}/>
            <Stack.Screen name={"FavoriteNews"} component={News} options={{
                title: 'News',
                headerStyle: {
                    backgroundColor: color.background
                },
                headerTintColor: color.white
            }}/>
        </Stack.Navigator>
    );
}

export default FavoriteNav;