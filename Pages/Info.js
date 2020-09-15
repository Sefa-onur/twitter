import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class Info extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.Conteiner} >
                <View style={styles.Header} >
                    <Icon name='twitter' color='#08a0e9' size={25} />
                </View>
                <View style={styles.Main} >
                    <Text style={styles.Text} >Şu anda dünyada</Text>
                    <Text style={styles.Text}>olup bitenleri gör.</Text>
                    <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('CreateUser')} >
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >Hesap Oluştur</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.Answer} >
                    <Text style={{ color: '#a0a0a0' }} >Zaten bir hesabın var mı? </Text>
                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')} >
                        <Text style={{ color: '#1dcaff', fontWeight: '100' }}>Giriş yap</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Info;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        backgroundColor:'white'
    },
    Header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Main: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    Text: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    Button: {
        height: 40,
        width: 250,
        backgroundColor: '#00aced',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 20
    },
    Answer: {
        alignItems: 'center',
        marginBottom: 30,
        flexDirection: 'row',
        marginLeft: 40
    }
})