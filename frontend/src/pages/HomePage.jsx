import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
const HomePage = () => { 
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
 
  return (
    <Container maxW="container.xl" px={12}>
      <VStack spacing={8}>
        <GiShoppingCart
          style={{ width: "54px", height: "54px", color: "black" }}
        />
        <Text
          fontSize="2xl"
          textAlign="center"
          fontWeight="bold"
          bgClip="text"
          bgGradient="linear(to-r, teal.500, blue.500)"
        >
          Current products
        </Text>
        {products?.length === 0 && (
          <Text
            fontSize="xl"
            textAlign="center"
            fontWeight="bold"
            bgClip="text"
            bgGradient="linear(to-r, green.300, blue.500)"
          >
            No products found... <br />
            <br />
            <Link to="/create">
              <Text
                as="span"
                color="orange.300"
                fontWeight="bold"
                px={8}
                py={4}
                border="1px solid"
                borderColor="orange.600"
                rounded="md"
                _hover={{ color: "orange.500" }}
              >
                Create Product
              </Text>
            </Link>
          </Text>
        )}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {products?.map((product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};
export default HomePage;
