import React from 'react'
import './Navbar.scss'
import siteLogo from '../../assets/images/site-logo.svg'
import { Container } from '../../utils'
const Navbar = () => {
  return (
    <Container>
        <div className='navbar-wrapper'>
            <img src={siteLogo} alt="" />
            <div>
                <select>
                    <option value="">USD</option>
                    <option value="">RUB</option>
                    <option value="">UZS</option>
                </select>
                <button className='watch-list-btn'>WATCH LIST</button>
            </div>
        </div>
    </Container>
  )
}

export default Navbar