import { EditIcon , DeleteIcon} from '@chakra-ui/icons';
import { Box, Heading, HStack, IconButton,Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/product'; // Adjust the import path as necessary


export const ProductCard = ({product}) => {
    const [updatedProduct ,setUpdatedProduct] = useState(product);
    const textColor =useColorModeValue("gray.600","gray.200");
    const bg =useColorModeValue("white","gray.800");

    const {deleteProduct, updateProduct}=useProductStore();
    const toast=useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();


    const handleDeleteProduct=async (pid) => {
      const {success,message} = await deleteProduct(pid);
      if(!success){
        toast({
          title: "Error",
          description: message,
          status:"error",
          duration:3000,
          isClosable:true,

        })
      }else(
        toast({
          title: "Success",
          description: message,
          status:"success",
          duration:3000,
          isClosable:true,
        })
      )

    }

     const handleUpdateProduct= async (pid, updatedProduct) => {
        const { success, message}=await updateProduct(pid, updatedProduct);
        if (success) {
          setUpdatedProduct(updatedProduct); // Ensure UI reflects updated product
        }
        onClose();
        if(!success){
          toast({
            title: "Error",
            description: message,
            status:"error",
            duration:3000,
            isClosable:true,
  
          })
        }else(
          toast({
            title: "Success",
            description: "Product updated successfully!",
            duration:3000,
            isClosable:true,
          })

          
        )
        
        
     }

  return (
    <Box
      shadow={"lg"}  
      rounded={"lg"}
      transition={"all .3s"}
      _hover={{ transform: "translateY(-10px)", shadow: "xl" }}
      overflow='hidden'
        bg={bg}
    >
        <Image src={product.image} alt={product.name} h={48} w="full" objectFit="cover" />

        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>

            <Text fontWeight='bold' fontSize='xl'  color={textColor} mb={4}>
               ${product.price}
            </Text>   

            <HStack spacing={2}>
            <IconButton icon={<EditIcon />} colorScheme="blue" onClick={() => {  setUpdatedProduct(product); // Ensure product data is loaded before opening modal 
            onOpen(); }} 
/>

                <IconButton icon={<DeleteIcon />} onClick={()=>handleDeleteProduct(product._id)} colorScheme={"red"}/>
            </HStack>    
        </Box>   

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>

            <ModalContent>
                <ModalHeader>Update Product </ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                  <VStack spacing={4}>
                    <Input placeholder='Product Name' name='name'
                    value={updatedProduct.name} onChange={(e) => setUpdatedProduct({...updatedProduct,name: e.target.value})} />
                    <Input placeholder='Price' name='price' type='number'
                    value={updatedProduct.price}  onChange={(e) => setUpdatedProduct({...updatedProduct,price: e.target.value})}/>
                    <Input placeholder='Image URL' name='image'
                    value={updatedProduct.image }  onChange={(e) => setUpdatedProduct({...updatedProduct,image: e.target.value})}/>
                  </VStack>
                </ModalBody>

               <ModalFooter>
                <Button colorScheme='blue' mr={3}
                onClick={()=>handleUpdateProduct(product._id,updatedProduct)}>
                  UPDATE
                </Button>
                <Button variant='ghost' onClick={onClose}>
                  CANCEL
                </Button>
               </ModalFooter>

            </ModalContent>

        </Modal>

    </Box>    
  );
}





export default ProductCard