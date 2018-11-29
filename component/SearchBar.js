import React from 'react';
import { View, TextInput , StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default class SearchBar extends React.Component {

    state = { 'term' : '' };
    render() {
        return (
            <View style ={styles.searchContainer}>
                    <TextInput style={styles.searchText} onChangeText = {(term) => this.setState({ term})} value={this.state.term} />
                    <Button title={this.props.loading ? "Loading..." : "search"} onPress = {() => this.props.onPressSearch(this.state.term)} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        marginTop:5

    },
    searchText:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginTop:10
    }
})