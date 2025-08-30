import useUI from '@/hooks/useUI'
import AppNavigator from '@/navigation/app/AppNavigator'
import React from 'react'
import { PaperProvider } from 'react-native-paper'

const App = () => {
  const { theme } = useUI()
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  )
}

export default App