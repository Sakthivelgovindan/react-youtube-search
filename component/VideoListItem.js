import React from 'react';
import { View , Text, StyleSheet ,Image } from 'react-native';

const VideoListItem = ({ Video }) => {

    const {
        title,
        description,
        channelTitle,
        thumbnails : {
            medium : {
                url
            }
        }
    } = video.snippet;
    return(
        <View>
            <Image 
                style={ styles.imageStyle }
                source={{ uri : url }}
            />
            <Text>{title}</Text>
            <Text>{channelTitle}</Text>
            <Text>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle : {
        alignSelf : 'stretch',
        height:180
    }
})

export default VideoListItem;