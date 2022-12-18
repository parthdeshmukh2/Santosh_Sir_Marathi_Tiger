import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Crousel from '../Components/Crousel'
import About from '../Components/About'
import Achivements from '../Components/Achivements'
import Youtube from '../Components/Youtube'



const HomePage = () => {
  return (
    <Box>
    <Navbar/>
 <Crousel/>

 <About/>

 <Achivements/>

 <Youtube/>

        <Footer/>
      
    </Box>
  )
}

export default HomePage
