import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UserContextProvider } from './contexts/UserContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <UserContextProvider>
          <Router></Router>
        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
