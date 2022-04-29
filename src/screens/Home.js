import React, { useEffect, useState } from 'react';
import { Alert, BackHandler, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import getNews from '../api/GetNews';
import NewsCard from '../components/NewsCard';
import color from '../utils/color';
import refreshNews from '../api/RefreshNews';
import { setRefresh } from '../stores/refreshStore';
import { setNews } from "../stores/newsStore";
import { useRoute } from "@react-navigation/native";

const Home = ( props ) => {
    const route = useRoute();
    const news = useSelector( ( state ) => state.news.value );
    const refreshed = useSelector( ( state ) => state.refresh.refreshed );
    const dispatch = useDispatch();

    // useEffect(() => {
    //     const backAction = () => {
    //         console.log(route.name);
    //         Alert.alert("Hold on!", "Are you sure you want to exit?", [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => null,
    //                 style: "cancel"
    //             },
    //             { text: "YES", onPress: () => BackHandler.exitApp() }
    //         ]);
    //         return true;
    //     };
    //
    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );
    //
    //     return () => backHandler.remove();
    // }, []);


    useEffect( () => {
        if ( news == null ) {
            getNews( dispatch, setNews, news ).then( r => setRefresh( false ) );
        }
    }, [ refreshed ] )

    const handleReload = () => {
        dispatch( setRefresh( true ) );
        refreshNews( dispatch, setNews ).then( r => setRefresh( false ) );
    }

    if ( news == null ) {
        return (
            <ScrollView style={ styles.container }>
                {/*<HomeTitle />*/ }
            </ScrollView>
        );
    } else {
        return (
            <ScrollView style={ styles.container }
                        refreshControl={ <RefreshControl refreshing={ refreshed } onRefresh={ handleReload }/> }>
                {/*<HomeTitle />*/ }
                {
                    news.map( ( data, i ) => {
                        return <NewsCard fromFavorites={ false } newsData={ data } key={ i }/>
                    } )
                }
            </ScrollView>
        );
    }


}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: color.background,
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 40
    }
} )

export default Home;