import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';


import SignInScreen from './screens/SignIn';
import ElevatorScreen from './screens/ElevatorList';
import ElevatorStatusScreen from './screens/ElevatorStatus';


const RootStack = createStackNavigator();
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleSignIn = () => {
    // TODO implement real sign in mechanism
 
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        
     
        
        <RootStack.Screen name="Sign In">
          {(props) => (
            <SignInScreen {...props} onSignIn={handleSignIn} />
          )}
          
        </RootStack.Screen>
        <RootStack.Screen name="Elevator List" component={ElevatorScreen}  
       
        />

        <RootStack.Screen name="Elevator Status" component={ElevatorStatusScreen}  
        
        />
       
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;