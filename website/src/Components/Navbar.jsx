import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.800", "gray.900")}
        px={4}
        w="90%"
        m="auto"
        rounded="xl"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box w={{ base: "25%", md: "10%" }} ml={{ base: "20", md: "0" }}>
              <Image
                borderRadius="full"
                objectFit="cover"
                onClick={()=> navigate('/')}
                cursor="pointer"
                src="https://yt3.ggpht.com/ytc/AMLnZu_hgE2vgZazcSiX8C7jLgQylNOBcOIwG27Ca4M40aQ=s176-c-k-c0x00ffffff-no-rj"
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
             
              <Text cursor="pointer" color="white" fontWeight="600"  onClick={()=> navigate('/achivements')} >
                Achivements
              </Text>
              <Text cursor="pointer" color="white" fontWeight="600"   onClick={()=> navigate('/onlinetraining')}>
                Online Training
              </Text>
              <Text cursor="pointer" color="white" fontWeight="600"  onClick={()=> navigate('/about')} >
                About
              </Text>
            </HStack>{" "}
            color='white'
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4bioVwSx7DA5ooKiQzPbW66ZZp5rFI67FA&usqp=CAU"
                  }
                />
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Text cursor="pointer" color="white" onClick={()=> navigate('/')} >
                About
              </Text>
              <Text cursor="pointer" color="white" onClick={()=> navigate('/')} >
                Achivements
              </Text>
              <Text cursor="pointer" color="white" onClick={()=> navigate('/')} >
                Online Training
              </Text>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
