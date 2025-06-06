import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ScreenHome() {
 const navigation = useNavigation();

  return (
    <View>
      <Text>ScreenHome</Text>
      <Button icon="" mode="contained" onPress={navigation.push('')}>
        Press me
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})