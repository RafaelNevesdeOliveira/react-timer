import { Button } from './components/Button'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" content="Enviar 1" />
      <Button variant="danger" content="Enviar 2" />
      <Button variant="secondary" content="Enviar 3" />
      <Button variant="success" content="Enviar 4" />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
