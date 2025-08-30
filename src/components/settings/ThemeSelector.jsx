// src/components/settings/ThemeSelector.jsx
import React from 'react';
import { View } from 'react-native';
import { SegmentedButtons, Text, Divider } from 'react-native-paper';
import useUI from '@/hooks/useUI';

export default function ThemeSelector() {
  const { selectedTheme, currentTheme, setTheme } = useUI();

  return (
    <View style={{ gap: 6 }}>
      <Text variant="labelLarge">Theme</Text>

      <SegmentedButtons
        value={selectedTheme}
        onValueChange={setTheme} // receives 'light' | 'dark' | 'system'
        buttons={[
          { value: 'light',  label: 'Light'  },
          { value: 'dark',   label: 'Dark'   },
          { value: 'system', label: 'System' },
        ]}
        style={{ alignSelf: 'stretch' }}
      />

      <Text variant="bodySmall" style={{ opacity: 0.7 }}>
        Selected: <Text style={{ fontWeight: '600' }}>{selectedTheme}</Text>
        {'  '}•  Currently applied: <Text style={{ fontWeight: '600' }}>{currentTheme}</Text>
      </Text>

      <Divider style={{ marginTop: 12 }} />
    </View>
  );
}
