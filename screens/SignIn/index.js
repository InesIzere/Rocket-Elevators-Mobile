import { TextInput, Button} from 'react-native-paper';
import Logo from '../assets/R2.png';
import axios from 'axios';
import metal from '../assets/2.jpeg';

import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity} from 'react-native';
const StartupScreen= ({ navigation }) => {
  const [email, setEmail] = useState({ value: ''})

  function logInAuthentification()  {
    let employee_email = email.value;
    if(employee_email == "") return alert("Email is Required !!");
    console.log (employee_email);
    //Call API
    return axios.get(`https://rocketmobile2000.herokuapp.com/api/employees/${employee_email}`)
        .then(function (response) {
          console.log ('API inside');
          console.log (response.data);
            const answear = response.data;
            if (answear == true) {
              console.log ('works');
              navigation.reset({
                                index: 0,
                                routes: [{ name: "Elevator List" }],
                            })
            }
            else{
              console.log("${employee_email} is incorrect");
              alert("Sorry!\n${employee_email} is not the email of a listed agent");
            }
        })
      }
 

  return (
    <ImageBackground  style={styles.background} source={require('../assets/2.jpeg')}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/R2.png')} />
      <Text height = {70} > Welcome to Rocket Elevators</Text>
       
      </View>
      
      <View>
        <Text style = {styles.instructions1}>Please to start login using your email</Text>
        <TextInput style={styles.loginButton}  value={email.value}  onChangeText={(text) => setEmail({ value: text})}  required />
        <TouchableOpacity>
          <Button style = {styles.registerButton}
          icon="login" mode="contained" onPress={logInAuthentification} > Log in </Button>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = {
  container: {
      flex: 1,
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
      borderBottomWidth: '1',
      borderBottomColor: '#eee'
  },
  logoContainer: {
    
    position: "absolute",
    top : 30,
    alignItems: "center",
    fontSize:50, 
    height: 70,
    fontWeight: "bold",
    margin: 15
  },
  loginButton: {

    width:"100%",
    height: 50,
    backgroundColor: "#EF0909",

  },
  registerButton: {

    width:"100%",
    height: 50,
    backgroundColor: "#0000FF",

  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  
    },
  title: {
      fontSize: 18,
      margin: 10,
      textAlign: 'center',
      color: 'rgb(34, 65, 115)',
},
   logo: {
  width: 305,
  height: 159,
  resizeMode: "contain",
  marginBottom: 30,
  marginTop: 0,
},
  elevatorList: {
      fontSize: 15,
      margin: 10,
      textAlign: 'center',
      color: 'rgb(34, 65, 115)',
      borderBottomWidth: '1',
      borderBottomColor: '#eee'
  },

  button: {
    marginTop: 20,
    elevation: 8,
    backgroundColor: "#335e82",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
      fontSize: 15,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
      padding: 10,
      borderRadius: 5
  },
  textinput: {
    fontSize:50, height: 70,
    margin: 15
  }
}
export default StartupScreen;