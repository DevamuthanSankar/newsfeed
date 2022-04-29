import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image, Button, TouchableOpacity, BackHandler, Linking } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import color from "../utils/color";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite, removeFavorite } from "../stores/favoriteStore";
import { setTabInvisible, setTabVisible } from "../stores/tabNavStore";

function News() {
    const [ imageError, setImageError ] = useState( false )
    const [ isFavorite, setIsFavorite ] = useState( false );
    const favoriteNews = useSelector( ( state ) => state.favorite.favorites.newsId );
    const route = useRoute();
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { newsData } = route.params;

    useEffect( () => {
        const backAction = () => {
            dispatch( setTabVisible() );
        }
        const backHandler = BackHandler.addEventListener( "hardwareBackPress", backAction );
        return () => backHandler.remove();
    } );

    useEffect( () => {

        dispatch( setTabInvisible() );
        if ( favoriteNews.includes( newsData._id ) ) setIsFavorite( true );
        navigation.setOptions( {
            headerRight: () => (
                <TouchableOpacity>
                    <Icon name={ isFavorite ? 'favorite' : 'favorite-border' } iconStyle={ { marginRight: 2 } }
                          color={ '#fff' } onPress={ handleFavoriteClick }/>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity>
                    <Icon name={ 'keyboard-backspace' } color={ color.white } iconStyle={ { marginRight: 10 } }
                          onPress={ handleBackClick }/>
                </TouchableOpacity>
            )
        } )
    } )


    const handleOnImageError = () => {
        setImageError( true );
    }

    const handleFavoriteClick = () => {
        if ( !isFavorite && !favoriteNews.includes( newsData._id ) ) {
            dispatch( setFavorite( newsData ) );
            setIsFavorite( true );
        } else if ( isFavorite && favoriteNews.includes( newsData._id ) ) {
            dispatch( removeFavorite( newsData ) );
            setIsFavorite( false );
        }
        setIsFavorite( false );
    }

    const handleBackClick = () => {
        dispatch( setTabVisible() );
        navigation.goBack();
    }

    const handleLinkClick = () => {
        Linking.canOpenURL( newsData.link ).then( supported => {
            if ( supported ) {
                Linking.openURL( newsData.link ).then( r => null );
            } else {
                alert( "Don't know how to open URI: " + newsData.link );
            }
        } );
    }

    return (
        <ScrollView style={ styles.container }
                    contentContainerStyle={ { flexGrow: 1, alignItems: 'flex-start', justifyContent: 'flex-start' } }>
            <View style={ styles.imageContainer }>
                {
                    ( !imageError ) ?
                        <Image source={ { uri: newsData.media, height: '100%', width: '100%', resizeMode: 'contain' } }
                               onError={ handleOnImageError } style={ styles.image }/> :
                        <Text style={ styles.alternateText }>Image Unavailable</Text>
                }
            </View>

            <View style={ styles.titleContainer }>
                <Text style={ styles.titleText }>
                    { newsData.title }
                </Text>
                <View style={ styles.subTitleContainer }>
                    <Text style={ styles.subTitleText }>{ newsData.author }</Text>
                    <Text style={ [ styles.subTitleText, styles.publishDate ] }>{ newsData.published_date }</Text>
                </View>
            </View>

            <View style={ styles.seperator }/>

            <View style={ styles.descriptionContainer }>
                <Text style={ styles.descriptionText }>{ newsData.summary }</Text>
            </View>

            <TouchableOpacity style={ styles.linkButton } onPress={ handleLinkClick }>
                <Text style={ styles.buttonText }>View Full Article</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = {
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: color.background,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 30,
    },
    imageContainer: {
        width: '100%',
        height: 250,
    },
    image: {
        borderRadius: 15
    },
    alternateText: {},
    titleContainer: {
        width: '100%',
        marginTop: 30,
    },
    titleText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700'
    },
    subTitleContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 25
    },
    subTitleText: {
        color: color.textGrey,
        fontSize: 15,
        fontWeight: '300'
    },
    publishDate: {
        paddingLeft: 25
    },
    seperator: {
        height: 6,
        width: 60,
        borderRadius: 15,
        backgroundColor: color.textGrey,

    },
    descriptionContainer: {
        paddingTop: 25
    },
    descriptionText: {
        color: color.textGrey,
        fontSize: 17,
        paddingBottom: 30
    },
    favoriteButton: {
        backgroundColor: color.background
    },
    linkButton: {
        bottom: 4,
        left: 0,
        width: '100%',
        height: 55,
        backgroundColor: '#247bed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        marginBottom: 30
    },
    buttonText: {
        color: color.white,
        fontSize: 17,
        fontWeight: '700',
    }
}

export default News;