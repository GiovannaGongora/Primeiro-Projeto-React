
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'  

import Home from "./src/pages/Home";
import SegTela from './src/pages/TelaDois';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen  
        name='Home' 
        component={Home} 
        options={{headerShown: false}}
        />


        <Stack.Screen  name='SegTela' component={SegTela}  options={{headerShown: false}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


