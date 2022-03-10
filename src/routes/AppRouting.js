import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { MainCard } from '../components/MainCard'

export default function AppRouting() {

  const routeHome = '/'
  const routeAccount = ''


  return (
    <>
      <Route path='/' element={<MainCard/>}></Route>
    </>
  )
}
