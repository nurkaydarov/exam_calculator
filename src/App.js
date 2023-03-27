import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Calculator from './components/Calculator';
import AlertProvider from './context/AlertContext';
import Alert from './components/Alert';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AlertProvider>
        <Calculator/>

      </AlertProvider>

    </ChakraProvider>
  );
}

export default App;
