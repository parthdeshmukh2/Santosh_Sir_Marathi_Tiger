import { Box, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import SantoshDada2 from "../Assets/SantoshDada2.jpg";
const About = () => {
  return (
    <Box
      w="90%"
      p="8"
      // bg="white"
      m="auto"
      mt="16"
      display="grid"
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)"}}
      gap='4'
 
    >
  <Box>
        <Text fontSize='4xl' color='white' fontStyle='italic'>About</Text>
<Text color='white' fontFamily='cursive'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cupiditate architecto nemo. Eum dolore exercitationem facilis quasi quaerat iste earum laborum, necessitatibus, animi aliquid laudantium, provident cumque veniam! Magnam necessitatibus voluptatem, fugit quam recusandae ducimus maiores autem animi quidem enim.</Text>

<Button bg='teal' mt='8' color='white'>Read More</Button>
      </Box>
      <Box >
        <Image w='100%' h='350px' src={SantoshDada2} />
      </Box>
    
    </Box>
  );
};

export default About;
