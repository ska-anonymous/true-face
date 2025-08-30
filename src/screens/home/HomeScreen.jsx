import { ROUTES } from '@/navigation/shared/routeNames'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-paper'

const HomeScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button mode='contained' icon={'list-box'} onPress={() => navigation.navigate(ROUTES.DETAILS, { id: 42 })}>Details</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
})

export default HomeScreen