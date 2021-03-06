/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @container: Chats
 * @class: Chats
 */

import React, { Component  } from 'react'
import {
  Text,
  View,
  Image,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native'
import Actions          from '../actions'
import { connect }      from 'react-redux'
import Router           from '../navigators'
import Auth             from '../services/Auth'
import { Color }        from '../assets/Varibles'
import Button           from 'react-native-button'
import Storage          from 'react-native-storage'
import Lists            from '../components/users/inviters'
import Topbar           from '../components/sidebars/Topbar'
import { Sae }          from 'react-native-textinput-effects'
import Icon             from 'react-native-vector-icons/FontAwesome'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: null
    }
  }

  componentDidMount() {
    Router.save(this)
  }

  send(){

  }

  onBack(){
    this.props.navigator.pop();
  }

  render() {
    const { messages, chat={} } = this.props
    const { name, image } = chat
    return (
      <View style={styles.container}>
        <Topbar style={styles.topbar}/>
        <View style={[styles.header, styles.row]}>
          <Button onPress={this.onBack.bind(this)} style={styles.btnIcon}>
            <Icon size={20} color='#FFF' name='hand-o-left' />
          </Button>
          <Text style={styles.title}>{name}</Text>
          <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.component}>
          <View style={styles.chatform}>
            <TextInput
              onChangeText={(text) => this.setState({text})}
              placeholder='Reply...'
              placeholderTextColor={Color.background} ref='input' style={styles.input} />
            <Button style={styles.btnSend} onPress={this.send.bind(this)}>
              <Icon name='mail-forward' size={20} color='#FFF' />
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
  },

  header: {
    padding: 8,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar
  },

  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
    textAlign: 'center',
  },

  component: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: Color.transparent
  },

  topbar: {
    ...Platform.select({
      ios: {
        height: 30,
      }
    }),
  },

  image: {
    width: 40,
    height: 40,
    marginRight: 5,
    borderRadius: 20,
  },

  row: {
    flexDirection: 'row'
  },

  input:{
    flex: 1,
    height: 50,
    padding: 15,
    color: Color.white
  },

  btnSend: {
    width: 40,
    height: 40,
    borderWidth: 0,
    borderLeftWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.sidebar
  },

  chatform: {
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: Color.sidebar
  },

  btnIcon: {
    margin: 5,
    borderWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.transparent,
  }
});

function map(state) {
  return state.Message
}

export default connect(map)(Chat)
