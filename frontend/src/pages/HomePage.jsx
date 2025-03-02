import {Container, VStack ,Text, SimpleGrid} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'

const HomePage = () => {
  return (
    <Container maxW='container.xl' py='12'>
      <VStack spacing='8'>
        <Text
          fontSize='30px'
          fontWeight='bold'
          textAlign='center'
          bgGradient='linear(to-r,rgb(133, 126, 234),rgb(128, 6, 144))'
          bgClip='text'
        >
          Current Products
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing='10'
          alignItems='center'
          justifyContent
          w={"full"}

        ></SimpleGrid>

        <Text
          fontSize='20px'
          textAlign='center'
          fontWeight='bold'
          color='gray.500'
        >
            No products available {""}
            <Link to='/create'>
              <Text as='span' color='blue.500' _hover={{textDecoration: 'underline'}}>
                Create a product
              </Text>
            </Link>
          </Text>
        
        
      </VStack>
    </Container>
  )
}

export default HomePage