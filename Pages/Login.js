import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Feather' 

const width = Dimensions.get('window').width

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            color:'#a0a0a0',
            colorTwo:'#a0a0a0'
        }
    }
    SingUp = () => {
       this.props.navigation.navigate('Tabs')
    }
    render() {
        return (
            <View style={styles.Conteiner}>
                <View style={styles.Header} >
                    <View style={styles.HeaderViewOne} >
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Info')} >
                            <Icon name='arrowleft' color='#08a0e9' size={20} style={{ marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.HeaderViewTwo} >
                        <View style={{ flex: 1 }} >
                            <Icon name='twitter' color='#08a0e9' size={20} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateUser')} >
                                <Text style={{ color: '#08a0e9', fontWeight: 'bold' }} >Kaydol</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Icons name='more-vertical' color='#08a0e9' size={25} />
                        </View>
                    </View>
                </View>
                <View style={styles.Input} >
                    <Text style={styles.Text} >
                        Twitter'a giriş yap.
                    </Text>
                    <Text style={{ color: '#a0a0a0', fontSize: 15 }} >E-posta</Text>
                    <TextInput
                        placeholder=''
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })}
                        style={{borderBottomWidth:1, borderColor:this.state.color,margin:10 }}
                        autoFocus={true}
                        onFocus={() =>this.setState({color:'#08a0e9'})}
                        onBlur={ () => this.setState({color:'#a0a0a0'})}
                    />
                    <Text style={{ color: '#a0a0a0', fontSize: 15 }} >Şifre</Text>
                    <TextInput
                        placeholder=''
                        value={this.state.password}
                        onChangeText={text => this.setState({ password: text })}
                        style={{borderBottomWidth:1, borderColor:this.state.colorTwo,margin:10 }}
                        secureTextEntry={true}
                        onFocus={ () =>  this.setState({colorTwo:'#08a0e9'})}
                        onBlur={ () => this.setState({colorTwo:'#a0a0a0'})}
                    />
                    <View style = {{justifyContent:'center',alignItems:'center',marginTop:10}} >
                        <Text style = {{color:'#a0a0a0'}} >Şifreni mi unuttun?</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-end', borderWidth: 1, borderColor: '#aab8c2' }}>
                    <TouchableOpacity style={styles.Button} ><Text style={{ fontWeight: 'bold', color: 'white' }} onPress={this.SingUp.bind(this)} >Giriş Yap</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default Login;

const styles = StyleSheet.create({
    Conteiner: {
        flex: 1,
        backgroundColor:'white'
    },
    Header: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        flexDirection: 'row'
    },
    HeaderViewOne: {
        flex: 1,
    },
    HeaderViewTwo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Text: {
        fontWeight: 'bold',
        fontSize: 25
    },
    Input: {
        marginTop: 10,
        flex: 1
    },
    Button: {
        height: 30,
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        backgroundColor: '#1da1f2',
        margin: 5
    }
})