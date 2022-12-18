import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {Box, Image, Text, Button} from "@chakra-ui/react";
import OnlineTraining1 from "../Assets/OnlineTraining1.jpg"
import { saveAs } from "file-saver";


const onlineTrainingData = [
    "https://yatindersingh.in/Upload/gKr6D_sumit.jpg", "https://yatindersingh.in/Upload/LU1I8_mayank.png",
    "https://yatindersingh.in/Upload/eBCzG_nitin.jpg", "https://yatindersingh.in/Upload/Qa1Lf_sargam.png",
    "https://yatindersingh.in/Upload/RKXR7_6.png", "https://yatindersingh.in/Upload/UtOaD_9.jpg",
    "https://yatindersingh.in/Upload/RIv6d_8.jpg", "https://yatindersingh.in/Upload/TjfRJ_7.png",
    "https://yatindersingh.in/Upload/fxaky_4.png", "https://yatindersingh.in/Upload/MKo8I_3.jpg"
]

const OnlineTraining = () => {

const handleDownload = () => {
    let url =  OnlineTraining1;
    saveAs(url, "Online Training Plan");
    alert("Downloded Successfully ");
}

  return (
    <Box>
        <Navbar/>
          <Text color='white' fontSize='4xl' fontWeight='600' fontFamily='cursive' fontStyle='italic' >Online Training</Text>
       
<Box w='80%' m='auto' mt='8'  display='grid' gap='4' gridTemplateColumns={{base:"repeat(1, 1fr)", md:"repeat(3, 1fr)", lg:"repeat(5, 1fr)"}}>
{onlineTrainingData.map((elem, index)=>{
   return <Image key={index} src={elem } rounded='xl'/>
})}
</Box>
<Text mt='12' color='white' fontSize='xl' fontWeight='600' fontFamily='cursive' fontStyle='italic' > For Online Training</Text>
<Button color='white' mt='4' bg='green' onClick={handleDownload}>Click Here</Button>

        <Footer/>
      
    </Box>
  )
}

export default OnlineTraining
