/**
 * @name: ChatApp
 * @uri: https://github.com/hkhungit/react-native-chat-app.git
 * @author_uri: http://hunghk.xyz
 * @author: hunghk
 * @version: 1
 * @sage: Index
 */

import { fork } from 'redux-saga/effects'
import { getChatsWatcher } from './Chats'
import { signUpWatcher } from './SignUp'
import { signInWatcher } from './SignIn'

export default function* root() {
  yield fork(getChatsWatcher)
  yield fork(signUpWatcher)
  yield fork(signInWatcher)
}
