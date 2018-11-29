import React from 'react';
import { View , ScrollView, StyleSheet } from 'react-native';
import VideoListItem from './VideoListItem';

const videoList = ( { videos }) => {
     
    const VideoItem = videos.map(video =>{
       // console.log("Video"+video);
        <VideoListItem 
            key={video.etag}
            video={video}
        />
    });

   
        return(
            <ScrollView>
                <View style = { styles.containerStyle }>
                    {VideoItem}
                </View>
            </ScrollView>
        );
    

};

const styles = StyleSheet.create({
    containerStyle :{
        marginTop:10,
        marginLeft:10,
        marginBottom:10
    }
})


export default videoList;
