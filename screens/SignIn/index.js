import { TextInput, Button, } from 'react-native-paper';
import logo from '../assets/R2.png';
import axios from 'axios';
import image from '../assets/2.jpeg';
import React,{useState} from 'react';
import { ImageBackground, StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, Dimensions} from 'react-native';
const StartupScreen= ({ navigation }) => {
  const [email, setEmail] = useState({ value: ''});
  const windowHeight = Dimensions.get('window').height;
  var isLogged = useState(false);

  function logInAuthentification()  {
    let employee_email = email.value;
    if(employee_email == "") return alert("Email is Required !!");
    console.log (employee_email);
    //Call API // function for getting list of elevators
    return axios.get(`https://rocketmobile2000.herokuapp.com/api/employees/${employee_email}`)
     // handle response
        .then(function (response) {
          console.log ('API inside');
          console.log (response.data);
            const answear = response.data;
            if (answear == true) {
              console.log ('works');
              navigation.reset({
                                index: 0,
                                routes: [{ name: "Elevator List", isLogged: true }],
                            })
            }
            else{
              console.log("Email is incorrect");
              alert("Sorry! the entered email  is not a valid listed agent");
            }
        })
      }
 

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View  >  
          <Image  source={logo} style={styles.logo} resizeMode="contain"  />
          <Text style={styles.exemple}> Welcome to Rocket Elevators</Text>
        </View>
      
         
         <View  >
          <Text style = {styles.example}>Please Enter Your Email address</Text>
          <TextInput style={{alignItems:"center"}}  style={{color: "white",height: 40, borderColor: 'blue', width: Dimensions.get("window").width, margin:10 }}
            value={email.value}  onChangeText={(text) => setEmail({ value: text})}  required />
            <TouchableOpacity>
              <Button  style = {{margin:10, backgroundColor: "blue", height: 40,}} 
              icon="login" mode="contained" onPress={logInAuthentification} > Log in </Button>
          </TouchableOpacity>
        </View>
          
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    
  exemple:{
    color:'#fff', 
    fontSize:40, 
    textAlign:'center',
   
  },
  example:{
    color:'white', 
    fontSize:20, 
    textAlign:'center'
  
  },
 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column'
    },
    logo: {

      width: 400,
      height: 159,
      marginBottom: 10,
      
    },
    
    button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 5,
    },
   
   
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "space-between",
      flexDirection: 'column'

    }
    });
export default StartupScreen;