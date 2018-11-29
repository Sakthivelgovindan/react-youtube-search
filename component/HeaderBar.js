import React from 'react';
import { Header } from 'react-native-elements';

export default class HeaderBar extends React.Component{
    render(){
        return(
        
            <Header
            centerComponent={{ text: this.props.headerText, style: { color: 'white' ,fontSize:17 } }}
            outerContainerStyles={{ backgroundColor: '#E62117' }}
            />
        );
    }
}