import React,{Component} from 'react'
import {View, Text} from 'react-native';

class Main extends Component{
    render() {
        return(
            <View style = {{justifyContent:'center', alignItems:'center', flex:1}} >
                <Text>
                    Main
                </Text>
            </View>
        )
    }
}
export default Main;