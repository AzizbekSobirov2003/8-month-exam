import React from 'react'
import { Container } from '../../utils'
import './Reel.scss'
import instance from '../../services/api'
import { useState,useEffect } from 'react'
import TableTr from '../../layout/table-tr/TableTr'
import { FaAngleLeft,FaAngleRight } from 'react-icons/fa';

const Reel = () => {
  const [coins, setCoins] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage,setCurrentPage] = useState(1)

  useEffect(()=>{
    async function loadTenCoins(){
      const response = await instance(`/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=24h`)
      response.data && setCoins(response.data)
    } 
    loadTenCoins()
  },[currentPage])
  
  useEffect(()=>{
    async function loadAllCoins(){
      const response = await instance('/coins/markets?vs_currency=USD&order=gecko_desc')
      response.data && setPageCount(response.data.length/10)
    } 
    loadAllCoins()
  },[])
  
  function addPage(){
      currentPage < pageCount && setCurrentPage(currentPage + 1)
  }
  function subtractPage(){
      currentPage > 0 && setCurrentPage(currentPage - 1)
  }
  function changePage(e){
    setCurrentPage(e.target.dataset.pageNumber)
  }
  return (
    <Container>
        <div className='reel-wrapper'>
            <div className="reel-header">
                <h2 className='reel-title'>Cryptocurrency Prices by Market Cap</h2>
                <input className='reel-search-input' type="text" placeholder='Search For a Crypto Currency..' />
            </div>
            <div className='reel-table-wrapper'>
                <table className='reel-table'>
                    <thead className='reel-table-header'>
                        <tr>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody className='reel-table-body'>
                        {
                            coins.map((coin,index)=>{
                               return <TableTr
                                    key={index} 
                                    id={coin.id}
                                    image={coin.image}
                                    name={coin.name}
                                    symbol={coin.symbol}
                                    price={coin.current_price}
                                    change={coin.price_change_percentage_24h}
                                    marketCup={coin.market_cap}
                                />
                            })
                        }
                    </tbody>
                </table>
                <div className='table-pagination'>
                  <button className='arrow' onClick={subtractPage}>
                    <FaAngleLeft/>
                  </button>
                    {
                       coins.map((coin,index)=>{
                            return <button 
                                key={index}
                                data-page-number={index+1} 
                                onClick={changePage} 
                                className={currentPage === index+1 ? 'pagination-btn active-page' : 'pagination-btn'}
                                >{index+1}</button>
                       })
                    }
                    <button className='arrow' onClick={addPage}>
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Reel