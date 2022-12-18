import { Box } from '@chakra-ui/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import AchivementCard from '../Components/AchivementCard'
import Footer from '../Components/Footer'


const achivementsData = [
    {
        id:1,
        image:"",
        title:"Mr. Universe 2022- 4Th place"
    },
    {
        id:2,
        image:"",
        title:"Mr. India 2022- 2nd Place 🥈"
    },
    {
        id:3,
        image:"",
        title:"World Championship- 6th Place"
    },
    {
        id:4,
        image:"",
        title:"Mr. India- 2nd Place 🥈"
    },
    {
        id:5,
        image:"",
        title:"Maharashtra Shree- 2nd Place 🥈"
    },
    {
        id:6,
        image:"",
        title:"University Nationals- 3 Times 1st Place 🥇"
    },
    {
        id:7,
        image:"",
        title:"Vidharbha Shree- Many Times 🥇 🥈"
    },
    {
        id:8,
        image:"",
        title:"Kamgar Shree- 1st place 🥇"
    },
    {
        id:9,
        image:"",
        title:"Wardha Shree- 1st Place 3 Times 🥇"
     }
   // ,
    // {
    //     id:10,
    //     image:"",
    //     title:""
    // }
    
]

const AchivementsPage = () => {
  return (
    <Box>
        <Navbar/>

        <Box w='80%' m='auto' mt='16' display='grid' gap='4' gridTemplateColumns={{base:'repeat(1, 1fr)', md:'repeat(2, 1fr)', lg:'repeat(3, 1fr)'}}>

            {achivementsData.map((elem)=> <AchivementCard key={elem.id} {...elem} />  )}

        </Box>

        <Footer/>
      
    </Box>
  )
}

export default AchivementsPage
