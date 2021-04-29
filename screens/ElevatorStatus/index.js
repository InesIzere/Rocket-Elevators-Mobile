import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator,ImageBackground,Image, StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {  Appbar, Button} from 'react-native-paper';



const ElevatorStatusScreen=(props)=> {

    const { id } = props.route.params;
    const [isLoading, setLoading] = useState(true);
    const [ data, setData] = useState([]);
    const [ showBtn, setShowBtn] = useState(false);
    var isLogged = props.route.params;

// function for status Check
     useEffect(()=>{
      fetch(`https://rocketmobile2000.herokuapp.com/api/elevators/${id}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));                      
    }, [data]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);



function updateStatus() {
    fetch(`https://rocketmobile2000.herokuapp.com/api/elevators/${id}`, {
        method: 'POST',
        headers: new Headers({
                   'Content-Type': ' application/json', //  Content-Type
          }),
        body: JSON.stringify({
            status: 'Active'
          })
          // <-- Post parameters
      })
      .then((response) => response.text())
      .then((responseText) => {
        alert(responseText)
        setShowBtn(true)      
      })
      .catch((error) => {
          console.error(error);
      });
    };

   //console.log(data)
  return (
  <View >

    <TouchableOpacity>

     {isLoading ? <ActivityIndicator/> : (
        <Text  style={[
        styles.status,
        data.status == "Inactive" ?
        { backgroundColor: 'red' } 
        : { backgroundColor: 'green' }
          ]}>
         {data.status}
          </Text>

        )}


        <Button   color="black"
          icon="camera" mode="outlined" onPress={() => updateStatus()}>
          
           End Task
        </Button>  

        <Button backgroundColor= "blue"  color="black"
                icon="logout" mode="outlined" onPress={() => props.navigation.navigate("Elevator List")}>
                Go Back To the List
        </Button>  

          {showBtn? (
          <View>
              <Button backgroundColor= "blue"  color="black"
                icon="logout" mode="outlined" onPress={() => props.navigation.navigate("Sign In")}>
                Go Back To Home Page
              </Button>  
           </View>) : (<View/>)}
          
       </TouchableOpacity>
   
     </View>
    );
}


const styles = StyleSheet.create({
   
    
    status: {
      padding: 10,
      borderRadius: 10,
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
    },
   
   
    elevatorId: {
      backgroundColor: "red",
      padding: 20,
      borderRadius: 5,
      textAlign: "center"
    },
    elevatorIdText: {
      fontSize: 20,
      color: '#fff',
  
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },

      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
        borderBottomColor: '#eeeeee'
      },
      instructions: {
        fontSize: 18,
        margin: 10,
        textAlign: 'center',
        color: 'rgb(34, 65, 115)',
    
      }, 
      button: {
        flex: 1,
        margin: 20,
        backgroundColor: "#ecf0f1",
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 25,
        paddingTop: 20,
        paddingBottom: 20
      },
      buttonText: {
        fontSize: 15,
        color: "#0f0f0f",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      },
      textinput: {
        fontSize:30, height: 40,
        margin: 10,
        color: "#0f0f0f",
    
      },
      elevatorId: {
        backgroundColor: "red",
        padding: 20,
        borderRadius: 5,
        textAlign: "center",
        
        borderBottomColor: 'rgb(24, 36, 56)'
      },
      elevatorIdText: {
        fontSize: 20,
        color: 'rgb(24, 36, 56)',
    
      },
      fab: {
          position: 'absolute',
          margin: 16,
          right: 10,
          top: 130
          ,
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      }
      });
 
  
  export default ElevatorStatusScreen;