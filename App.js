import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="About Lodestar"
        onPress={() => navigation.navigate('Lodestar')}
      />
      <Text />
      <Button
        title="About App"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

function AboutLodestar() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lodestar Screen</Text>
    </View>
  );
}

function AboutApp() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About App Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lodestar" component={AboutLodestar} />
        <Stack.Screen name="About" component={AboutApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//           title="About Lodestar"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//         <br />
//         <Button
//           title="About App"
//           onPress={() => Alert.alert('Simple Button pressed')}
//         />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
