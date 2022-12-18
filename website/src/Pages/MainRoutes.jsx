import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import AchivementsPage from './AchivementsPage'
import OnlineTraining from './OnlineTraining'

const MainRoutes = () => {
  return (
    <Routes>
        <Route  path='/'  element={<HomePage/>} />
        <Route  path='/about'  element={<AboutPage/>} />
        <Route  path='/achivements'  element={<AchivementsPage/>} />
        <Route  path='/onlinetraining'  element={<OnlineTraining/>} />
      
    </Routes>
  )
}

export default MainRoutes
