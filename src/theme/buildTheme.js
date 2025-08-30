import { Appearance } from 'react-native';
import {
    DefaultTheme as NavLight,
    DarkTheme as NavDark,
} from '@react-navigation/native';
import {
    MD3LightTheme as PaperLight,
    MD3DarkTheme as PaperDark,
    adaptNavigationTheme,
} from 'react-native-paper';

const { LightTheme: NavAdaptedLight, DarkTheme: NavAdaptedDark } = adaptNavigationTheme({
    reactNavigationLight: NavLight,
    reactNavigationDark: NavDark,
});

import merge from 'deepmerge'

// Prebuilt constants (handy if you don’t care about system theme)
export const LIGHT_THEME = merge(PaperLight, NavAdaptedLight);
export const DARK_THEME = merge(PaperDark, NavAdaptedDark);

// Pick by string: 'light' | 'dark'
export function getTheme(mode = 'light') {
    return mode === 'dark' ? DARK_THEME : LIGHT_THEME;
}

// Pick based on the current system appearance (no state/persistence)
export function getSystemTheme() {
    const isDark = Appearance.getColorScheme() === 'dark';
    return isDark ? DARK_THEME : LIGHT_THEME;
}
