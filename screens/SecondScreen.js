import { View, Text, Button } from 'react-native';

function SecondScreen({ navigation }) {
  return (
    <View>
      <Text>Second Screen</Text>
      <Button
        title="Home Screen"
        onPress={() => navigation.navigate('Home Screen')}
      />
    </View>
  );
}

export default SecondScreen;
