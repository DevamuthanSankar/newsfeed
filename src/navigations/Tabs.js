import React from 'react';
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import color from "../utils/color";
import {Icon} from "react-native-elements";
import HomeNav from "./HomeNav";
import FavoriteNav from "./FavoriteNav";
import {useSelector} from "react-redux";

const Tab = createBottomTabNavigator();

function Tabs(props) {
    const tabVisible = useSelector(state => state.tabNav.tabVisible)
    return (
        <Tab.Navigator initialRouteName={"Home"}>
            <Tab.Screen name={"Home"} component={HomeNav}  options={{
                title: 'Top News',
                headerShown: false,
                headerStyle: {
                    backgroundColor: color.background
                },
                headerTintColor: color.white,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: color.cardBackground,
                    display: tabVisible ? 'flex' : 'none',
                    borderTopWidth: 0
                },
                tabBarIcon: (focused) => {
                    return (
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon name={'home'} color={focused.focused?color.white:color.textGrey}/>
                            <Text style={{color: focused.focused?color.white:color.textGrey}}>Home</Text>
                        </View>
                    )
                }
            }}/>
            <Tab.Screen name={"Favorites"} component={FavoriteNav} options={{
                title: 'Top News',
                headerShown: false,
                headerStyle: {
                    backgroundColor: color.background,
                },
                headerTintColor: color.white,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: color.cardBackground,
                    display: tabVisible ? 'flex' : 'none',
                    borderTopWidth: 0
                },
                tabBarIcon: (focused) => {
                    return (
                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Icon name={'favorite'} color={focused.focused?color.white:color.textGrey}/>
                            <Text style={{color: focused.focused?color.white:color.textGrey}}>Favorite</Text>
                        </View>
                    )
                }
            }}/>
        </Tab.Navigator>
    );
}

export default Tabs;