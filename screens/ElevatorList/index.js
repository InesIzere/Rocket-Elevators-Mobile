import 'react-native-gesture-handler';
import React,{useState,useEffect} from 'react';
import { ActivityIndicator,FlatList,Image, StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import {  FAB, Appbar, Button} from 'react-native-paper';


const ElevatorScreen=(props)=> {


        const [isLoading, setLoading] = useState(true);
        const [data, setData] = useState([]);

      useEffect(()=>{
          fetch('https://rocketmobile2000.herokuapp.com/api/elevators/notActive')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }, []);


    return (

<View>
  <Button icon="logout" color="black" 
    mode="contained" onPress={() => props.navigation.navigate('Sign In')}>
    Log Out!
  </Button>
  <TouchableOpacity>   
  {isLoading ? <ActivityIndicator/> : (
    <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => (
      <Button style={styles.buttonText}
        icon="login" mode="outlined" color="red" onPress={() => {
        // onPress event comes with an event object
        props.navigation.navigate('Elevator Status', {
          id: item.id ,
          status: item.status
        });
      }}>
        Id:{item.id}
        Status:{item.status}
      </Button>

    )}/>
  )}
  </TouchableOpacity>

</View>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: '1',
    borderBottomColor: '#eeeeee'
  },
  instructions: {
    ontSize: 18,
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
    borderBottomWidth: '1',
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

export default ElevatorScreen;