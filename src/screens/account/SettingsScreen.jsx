// src/screens/settings/SettingsScreen.jsx
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Divider, Card, List } from 'react-native-paper';
import ThemeSelector from '@/components/settings/ThemeSelector';

export default function SettingsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {/* Header */}
      <Text variant="headlineSmall" style={{ marginBottom: 12 }}>
        Settings
      </Text>

      {/* THEME SECTION */}
      <Card mode="contained" style={{ marginBottom: 16, borderRadius: 16 }}>
        <Card.Content>
          <List.Section>
            <List.Subheader>Appearance</List.Subheader>

            <View style={{ paddingVertical: 8 }}>
              <ThemeSelector />
            </View>

            <Divider style={{ marginTop: 12 }} />
          </List.Section>
        </Card.Content>
      </Card>

      {/* Future sections… */}
      {/* <Card style={{ borderRadius: 16 }}>
        <Card.Content>
          <List.Section>
            <List.Subheader>Notifications</List.Subheader>
            ...
            <Divider style={{ marginTop: 12 }} />
          </List.Section>
        </Card.Content>
      </Card> */}
    </ScrollView>
  );
}
