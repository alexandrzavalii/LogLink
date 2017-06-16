/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


import Auth0Lock from 'react-native-lock'
import Auth0 from 'react-native-auth0';

// var lock = new Auth0Lock({clientId: '1iKKy0oQAsfX9tr4naRk3Un1btGA0izJ', domain: 'alexandr.auth0.com'});

const auth0 = new Auth0('alexandr.auth0.com')
.webAuth('1iKKy0oQAsfX9tr4naRk3Un1btGA0izJ')
.authorize({connection: 'linkedin', scope: 'openid email'})
.then(credentials => console.log('credentials', credentials))
    .catch(error => console.log(error));



// lock.show({}, (err, profile, token) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   // Authentication worked!
//   console.log('Logged in with Auth0!',profile, token);
// });
export default class LogLink extends Component {

  loginWithLinkedin(){
    alert('login linkedin');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity style={styles.instructions} onPress={this.loginWithLinkedin}>
          <Text>Login with Linkedin</Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LogLink', () => LogLink);
