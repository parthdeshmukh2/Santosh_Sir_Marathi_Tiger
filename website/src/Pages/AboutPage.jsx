import React from 'react'
import Navbar from '../Components/Navbar'
import {Box, Text, Image} from "@chakra-ui/react";
import Footer from '../Components/Footer';
import SantoshDada5 from "../Assets/SantoshDada5.jpg"
import SantoshDada4 from "../Assets/SantoshDada4.jpg"

const AboutPage = () => {
  return (
    <Box >
<Navbar/>
   
    <Box w='90%' m='auto' mt='16' display='grid' gap='4' gridTemplateColumns={{base:"repeat(1, 1fr)", md:"repeat(2, 1fr)"}}>

        <Box>
          <Text color='white' fontSize='3xl'>About</Text>
          <Text color='white' fontSize='2xl' mt='2' fontFamily='cursive'>Santosh Wagh</Text>
          <Text color='white' mt='4' fontStyle='italic' >
          The fact of being under-weight came to my realization in 1999 when I was in my 10th grade and I decided to work upon it. I decided to build an impressive personality and groom myself. My school coach guided me with several sessions of outdoor training. However, I realized the need of joining gym as the physical fitness regime that I was following was not sufficient for my requirement. The hostel did not have the provision and I decided to came back to my hometown, Saharanpur (Uttar Pradesh) where I pursued further studies and started exercises in gym. After one year of training, I could see a significant improvement in my physique and my coach suggested me to compete in a gym competition which I won. This was when I became passionate about bodybuilding and decided to pursue it on a professional level. I became more addicted and dedicated and bagged the title of Mr. Saharanpur in 2001 and my journey of being an athlete started from there.


          </Text>
        </Box>
        <Box>
            <Image w='100%' h='500px' src={SantoshDada5} />
        </Box>

        <Box>
            <Image w='100%' h='500px' src={SantoshDada4} />
        </Box>
        <Box>
         
          <Text color='white' mt='4' fontStyle='italic' >
          I also wanted to be independent and earn a living on my own and hence started working as a gym trainer. Due to limited exposure. I left my home town and moved to a better city nearby and continued as a gym trainer. In 2004, I bagged the prestigious title of Junior Mr. India and my preparations for further competitions went on. In 2005, life took a turn and while preparing for Asia championship I got severely injured. My back vertebrae had ruptured and this had caused nerve injuries due to which I had paralyzed my right hand and leg by about 30 percent. I was bedridden for months and my bodybuilding career which had just started had taken a halt for 3 years.


          </Text>
        </Box>
        
      
    </Box>

    <Footer/>
    </Box>
  )
}

export default AboutPage
