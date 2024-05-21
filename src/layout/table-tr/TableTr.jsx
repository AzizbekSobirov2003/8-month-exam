import React from 'react'
import './TableTr.scss'
import { AiFillEye } from 'react-icons/ai';
import {addcomma} from '../../helpers/index'
import { Link } from 'react-router-dom';
const TableTr = ({image,name,symbol,price,marketCup,change,id}) => {
  return (
    <tr className='tbody-tr'>
        <td>
            <Link className='table-name' to={`/${id}`}>
                <img src={image} alt="" />
                <div className='table-name-info'>
                    <p className='table-coin-name'>{symbol}</p>
                    <p className='table-coin-fullname'>{name}</p>
                </div>
            </Link>
        </td>
        <td className='table-price'>
            <p>${price}</p>
        </td>
        <td className='table-change-dayly'>
            <AiFillEye className='eye-icon'/>
            {change >= 0 ? <p className='change-dayly-table green'>+{change.toFixed(2)}%</p> : <p className='change-dayly-table red'>{change.toFixed(2)}%</p>}
        </td>
        <td className='table-market-cap'>
            <p>${addcomma(marketCup)}M</p>
        </td>
    </tr>
  )
}

export default TableTr