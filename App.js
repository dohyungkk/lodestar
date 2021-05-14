import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

var firebaseConfig = {
  apiKey: "AIzaSyB3gs76GIAHc4LWIRVOiTNwbN7Lbig-Ml4",
  authDomain: "rnlogin-b9e9a.firebaseapp.com",
  projectId: "rnlogin-b9e9a",
  storageBucket: "rnlogin-b9e9a.appspot.com",
  messagingSenderId: "366571849069",
  appId: "1:366571849069:web:5ab6501692a04a353d8664",
  measurementId: "G-9Q63XHFB59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      email:'',
      password:''
    })
  }

  login = (email, password) => {
    try {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (suer) {
        console.log(user);
      });
    } catch (error) {
      console.log(error.toString());
    }
  }

  signUp = (email, password) => {
    try {
      if(this.state.password.length<6) {
        alert("Enter at least 6 characters");
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input 
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input 
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>
          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUp(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'center',
    padding: 10
  }
});
