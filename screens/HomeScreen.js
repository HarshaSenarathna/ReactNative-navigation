import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Second Screen"
        onPress={() => navigation.navigate('Second Screen')}
      />
    </View>
  );
}

export default HomeScreen;
