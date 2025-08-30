import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Button, Text } from 'react-native-paper';

export default function DetailsScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  const { id } = route.params ?? {};

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>ID: {id ?? '—'}</Text>
      <Button mode='contained' icon={'home'} onPress={() => navigation.goBack()} >Home</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
});
