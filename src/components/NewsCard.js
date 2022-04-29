import React, { useState } from 'react';
import {View, StyleSheet, Image, Text, Pressable} from 'react-native';
import {useNavigation} from "@react-navigation/native";

function NewsCard(props) {
    const [imageError, setImageError] = useState(false)
    const navigation = useNavigation();

    const handleOnImageError = () => {
        setImageError(true);
    }

    const handleNewsClick = () => {
        if(props.fromFavorites){
            navigation.navigate('FavoriteNews', {newsData: props.newsData});
        } else {
            navigation.navigate('News', {newsData: props.newsData});
        }
    }

    return (
        <Pressable style={styles.container} onPress={handleNewsClick} android_ripple={{borderless: false, radius: 200}}>
            <View style={styles.imageContainer}>
                {
                    (!imageError)?
                    <Image source={{ uri: props.newsData.media, height: '100%', width: '100%', resizeMode: 'contain'}}
                    onError={handleOnImageError} style={styles.image}/>:
                    <Text style={styles.alternateText}>Image Unavailable</Text>
                }
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText} numberOfLines={3}>{props.newsData.title}</Text>
                <Text style={styles.timeText} numberOfLines={1}>Posted on {props.newsData.published_date}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 130,
        backgroundColor: '#242424',
        marginBottom: 20,
        borderRadius: 15,
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: 'center',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    imageContainer: {
        height: 105,
        width: 105,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        borderRadius: 15
    },
    alternateText: {
        color: '#fff',
        textAlign: 'center'
    },
    textContainer: {
        height: 105,
        width: 'auto',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingLeft: 12,
        paddingTop: 3,
        paddingBottom: 3
    },
    titleText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },
    descriptionText: {
        color: '#b5b5b5',
        fontSize: 12.5,
        fontWeight: '500',
    },
    timeText: {
        color: '#b5b5b5',
        fontSize: 11.25
    }
})

export default NewsCard;