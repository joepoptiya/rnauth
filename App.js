/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import {authentication} from './firebase/firebase-config';

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  // Text input states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const RegisterUser = () => {
    //console.log(authentication);
    //console.log(email);
    //console.log(password);

    createUserWithEmailAndPassword(authentication, email, password)
      .then(re => {
        console.log('User created successfully!');
        console.log(re);
      })
      .catch(error => {
        console.log('ERROR');
        console.error(error);
      });
    //authentication()
    //  .createUserWithEmailAndPassword(email, password)
    //  .then(re => {
    //    console.log('User created successfully');
    //    console.info(re);
    //  })
    //  .catch(error => {
    //    console.log('Error creating user');
    //    console.error(error);
    //  })
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChange={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChange={text => setPassword(text)}
      />
      <Button title="Register" onPress={RegisterUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
