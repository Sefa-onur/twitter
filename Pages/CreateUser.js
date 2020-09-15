import React, { Component } from 'react'
import firebase from 'firebase';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '',
            date: '',
            displayname: '',
            emailcolor: 'gray',
            displaynamecolor: 'gray',
            passwordcolor: '#a0a0a0',
            datecolor: '#a0a0a0'
        }
    }
    Create = () => {
        let email = this.state.email
        let password = this.state.password
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(() => alert('created'))
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.Header} >
                    <View style={{ flex: 1 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
                            <Icon name='arrowleft' color='#08a0e9' size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }} >
                        <Icon name='twitter' color='#08a0e9' size={20} />
                    </View>
                </View>
                <View style={{ flex: 1 }} >
                    <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 40, marginTop: 20 }} >
                        Hesabını oluştur
                    </Text>
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <TextInput
                            value={this.state.displayname}
                            onChangeText={text => this.setState({ displayname: text })}
                            placeholder='Kullanıcı İsmi'
                            style={{ margin: 10, borderBottomWidth:1, borderColor: this.state.displaynamecolor }}
                            onFocus={() => this.setState({ displaynamecolor: '#08a0e9'})}
                            onBlur={() => this.setState({ displaynamecolor: '#a0a0a0'})}
                            maxLength={50}
                            autoFocus={true}
                        />
                        <View style={{ alignItems: 'flex-end', marginRight: 10 }} ><Text style={{ color: '#a0a0a0', fontSize: 15 }} >50</Text></View>
                        <TextInput
                            value={this.state.email}
                            onChangeText={text => this.setState({ email: text })}
                            placeholder='E-mail'
                            style={{ margin: 10, borderBottomWidth: 1, borderColor: this.state.emailcolor }}
                            onFocus={() => this.setState({ emailcolor: '#08a0e9' })}
                            onBlur={() => this.setState({ emailcolor: '#a0a0a0' })}
                        />
                        <TextInput
                            value={this.state.password}
                            onChangeText={text => this.setState({ password: text })}
                            placeholder='Şifre'
                            style={{ margin: 10, borderBottomWidth: 1, borderColor: this.state.passwordcolor }}
                            secureTextEntry={true}
                            onFocus={() => this.setState({ passwordcolor: '#08a0e9'})}
                            onBlur={() => this.setState({ passwordcolor: '#a0a0a0' })}
                        />
                        <TextInput
                            value={this.state.date}
                            onChangeText={text => this.setState({ date: text })}
                            placeholder='Doğum Tarihiniz'
                            style={{ margin: 10, borderBottomWidth: 1, borderColor: this.state.datecolor }}
                            onFocus={() => this.setState({ datecolor: '#08a0e9'})}
                            onBlur={() => this.setState({ datecolor: '#a0a0a0'})}
                        />
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end' }} >
                    <TouchableOpacity style={styles.Button} onPress={this.Create.bind(this)} >
                        <Text style={{ color: 'white', fontWeight: 'bold' }} >
                            Hesap Oluştur
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default CreateUser;

const styles = StyleSheet.create({
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        flexDirection: 'row'
    },
    Button: {
        margin: 5,
        height: 30,
        width: 110,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#1da1f2'
    }
})