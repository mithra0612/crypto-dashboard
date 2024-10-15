import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react';
import "@fontsource/poppins";
import theme from './theme/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </StrictMode>,
)
