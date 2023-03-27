import { Container, Flex } from '@chakra-ui/react';
const FullScreenSection = ({children}) =>{
  return(
    <Container maxW="container.xl"  padding={0}>
      <Flex minH="100vh" alignItems="center" justifyContent="center">
        {children}
      </Flex>
    </Container>

  )
}
export default FullScreenSection;