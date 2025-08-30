import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Divider } from 'react-native-paper';
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { ROUTES } from '@navigation/shared/routeNames';
import { useNavigation } from '@react-navigation/native';

export default function AccountScreen() {
    const navigation = useNavigation()
    const goToSettings = () => navigation.navigate(ROUTES.SETTINGS);

    return (
        <View style={styles.container}>
            <List.Section>
                <List.Subheader>Account</List.Subheader>

                <List.Item
                    title="Settings"
                    description="Preferences, security, notifications"
                    onPress={goToSettings}
                    left={(props) => (
                        <MaterialDesignIcons name="cog-outline" size={24} color={props.color} />
                    )}
                    right={(props) => (
                        <MaterialDesignIcons name="chevron-right" size={24} color={props.color} />
                    )}
                />

                <Divider />
            </List.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, justifyContent: 'flex-start' },
    button: { marginTop: 12, alignSelf: 'flex-start' },
});
