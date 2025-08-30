import { useEffect, useMemo, useRef, useState } from 'react';
import { Appearance } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTheme, toggleSelectedTheme } from '@/store/ui/uiSlice';
import { resolveThemeForSelection } from '@/lib/theme';

export default function useUI() {
    const dispatch = useDispatch();
    const selectedTheme = useSelector((s) => s.ui.selectedTheme); // 'light' | 'dark' | 'system'
    const [systemColorScheme, setSystemColorScheme] = useState(Appearance.getColorScheme()); // 'light' | 'dark' | null
    const listenerRef = useRef(null);

    // Keep system color scheme up-to-date only when selectedTheme === 'system'
    useEffect(() => {
        if (selectedTheme !== 'system') {
            // Cleanup any previous listener
            if (listenerRef.current) {
                listenerRef.current.remove();
                listenerRef.current = null;
            }
            return;
        }

        // Set latest immediately
        setSystemColorScheme(Appearance.getColorScheme());

        // Subscribe to changes
        const sub = Appearance.addChangeListener(({ colorScheme }) => {
            setSystemColorScheme(colorScheme);
        });
        listenerRef.current = sub;

        return () => {
            if (listenerRef.current) {
                listenerRef.current.remove();
                listenerRef.current = null;
            }
        };
    }, [selectedTheme]);

    // Determine currentTheme (effective mode string) for display logic
    const currentTheme = useMemo(() => {
        if (selectedTheme === 'system') {
            return systemColorScheme === 'dark' ? 'dark' : 'light';
        }
        return selectedTheme; // 'light' | 'dark'
    }, [selectedTheme, systemColorScheme]);

    // Merged theme object for Paper + Navigation providers
    const theme = useMemo(() => resolveThemeForSelection(selectedTheme), [selectedTheme, systemColorScheme]);

    // Public API
    const setTheme = (mode) => dispatch(setSelectedTheme(mode)); // 'light' | 'dark' | 'system'
    const toggleTheme = () => dispatch(toggleSelectedTheme());   // cycles: light → dark → system → ...

    return {
        // state-like
        selectedTheme,   // what user picked
        currentTheme,    // effective: 'light' | 'dark'

        // objects to use in Providers / styles
        theme,

        // actions
        setTheme,
        toggleTheme,
    };
}
