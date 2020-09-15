import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Tab1 extends Component {
    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style = {styles.Header} >
                    <View style = {{flex:1,backgroundColor:'black'}} >
                        <Image/>
                    </View>
                    <View style = {{flex:1,backgroundColor:'yellow'}} >
                        <Icon name = 'twitter' color = '#08a0e9' size = {25} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Tab1;

const styles = StyleSheet.create({
    Header:{
        flexDirection:'row',
        height:40,
        backgroundColor:'black',
        justifyContent:'center'
    }
})