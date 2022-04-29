import React, {useEffect} from 'react';
import {View, Text, ScrollView, Alert, BackHandler} from 'react-native';
import { useSelector} from "react-redux";
import color from "../utils/color";
import {StyleSheet} from "react-native";
import NewsCard from "../components/NewsCard";
import {useNavigation, useRoute} from "@react-navigation/native";

function Favorites(props) {
    const favorites = useSelector(state => state.favorite.favorites.news)
    const route = useRoute();
    const navigation = useNavigation();

    // useEffect(() => {
    //     const backAction = () => {
    //         console.log(route.name);
    //         navigation.navigate("Home");
    //     };
    //
    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );
    //
    //     return () => backHandler.remove();
    // }, []);

    if(favorites.length === 0){
        return (
            <View style={[styles.emptyContainer, styles.container]}>
                <Text style={styles.emptyText}>No Favorites</Text>
            </View>
        )
    } else {
        return (
            <ScrollView style={styles.container}>
                {
                    favorites.map((news, i) => {
                        return <NewsCard fromFavorites={true} newsData={news} key={i} />
                    })
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: color.background,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 40
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    emptyText: {
        color: color.textGrey,
        fontSize: 15
    }
})


export default Favorites;