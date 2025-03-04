import {Container, VStack ,Text, SimpleGrid} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useProductStore } from  '../store/product'// Adjust the path as necessary
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const{ fetchProducts,products}= useProductStore(); 
  useEffect(()=>{
    console.log("Fetching products...");
      fetchProducts();

  },[fetchProducts]);
  //console.log("Products",products);
  console.log("Products state in HomePage:", products);


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

        {Array.isArray(products) && products.length > 0 ? (
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={"full"}

        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
      ) : (
        products.length === 0 ? (
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
        ) : null
      )}
      </VStack>
    </Container>
  )
}

export default HomePage