import React, { useEffect, useState } from 'react'
import './Hero.scss'
import { Container } from '../../utils'
import instance from '../../services/api'
import Swiper from '../../layout/swiper/Swiper'

const Hero = () => {
  const [coins, setCoins] = useState([])
  useEffect(()=>{
    async function loadAllCoins(){
      const response = await instance('/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
      response.data && setCoins(response.data)
    } 
    loadAllCoins()
  },[])
  console.log(coins)
  return (
    <div className='hero-wrapper'>
        <Container>
            <div>
                <h2 className='hero-title'>CRYPTOFOLIO WATCH LIST</h2>
                <p className='hero-info'>Get all the Info regarding your favorite Crypto Currency</p>
            </div>
            <Swiper data={coins}/>
        </Container>
    </div>
  )
}

export default Hero