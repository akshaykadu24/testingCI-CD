import { Box, Button, Card } from '@chakra-ui/react'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import All from '../pages/all'
import Css from '../pages/css'
import Html from '../pages/html'
import Javascript from '../pages/javascript'
import SingleCard from '../pages/singleCard'

const Navbar = () => {
  return (
    <Box>
        <Link to="/all"><Button>All</Button></Link>
        <Link to="/html"><Button>HTML</Button></Link>
        <Link to="/css"><Button>CSS</Button></Link>
        <Link to="/javascript"><Button>Javascript</Button></Link>

        <Routes>
            <Route path='/all' element={<All/>} />
            <Route path='/html' element={<Html/>} />
            <Route path='/css' element={<Css/>} />
            <Route path='/javascript' element={<Javascript/>} />
            <Route path='/:language/:id' element={<SingleCard/>} />


        </Routes>

    </Box>
  )
}

export default Navbar