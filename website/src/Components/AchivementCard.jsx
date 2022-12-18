import React from 'react'
import {Box, Image, Text} from "@chakra-ui/react"
import SantoshDada4 from "../Assets/SantoshDada4.jpg"

const AchivementCard = (elem) => {
  return (
    <Box h='350px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <Image h='80%' w='80%' rounded='xl'  src={SantoshDada4}/>
        <Text mt='4' color='white' >{elem.title}</Text>
      
    </Box>
  )
}

export default AchivementCard
