import React from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { Constants } from 'expo';
import YTSearch from 'youtube-api-search';
import HeaderBar from './component/HeaderBar';
import SearchBar from './component/SearchBar';
import VideoList from './component/VideoList';

const API_KEY = 'AIzaSyCnM2TYWydOAREkHx56gTkoiNzZvc_1Iiw';

export default class App extends React.Component {

    
  state = {
    loading : false,
    videos : []
  }

  onPressSearch = term => {
    console.log(term);
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading : true });
    YTSearch({ 'key' : API_KEY , term },videos => {
      console.log(videos);
      this.setState({
         loading:false,
         videos
         });
    });
  }
 
  render() {

    const { loading ,videos } = this.state;

    return (
      <View style={styles.container}>

        <HeaderBar 
          headerText="Simple Youtube Searcher" 
        />

       <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch} 
       />

       <VideoList  
        videos = {videos}
       />

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: Constants.statusBarHeight,
  }
});

AppRegistry.registerComponent('Point', () => Point) 
