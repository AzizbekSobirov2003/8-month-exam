import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import SingleCrypto from '../pages/singleCrypto/SingleCrypto'

const index = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:name' element={<SingleCrypto/>}/>
    </Routes>
  )
}

export default index