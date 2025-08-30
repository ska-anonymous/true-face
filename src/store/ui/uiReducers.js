// Group case reducers; import into the slice
export const uiReducerMap = {
    setSelectedTheme(state, action) {
        // 'light' | 'dark' | 'system'
        state.selectedTheme = action.payload;
    },
    toggleSelectedTheme(state) {
        const order = ['light', 'dark', 'system'];
        const idx = order.indexOf(state.selectedTheme);
        state.selectedTheme = order[(idx + 1) % order.length];
    },
};
