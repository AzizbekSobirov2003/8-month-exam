// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Virtual } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Swiper.scss';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


export default function App(data){
  console.log(data.data[0])
  return (
    <>
      <Swiper spaceBetween={50}
      slidesPerView={4} autoplay={true} modules={[Pagination,Autoplay,Virtual]} className="mySwiper" virtual={true}>
      {data.data.map((coin, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <Link className='swiper-link' to={`/${coin.id}`}>
              <img src={coin.image} alt="" />
              <div className='crypto-info'>
                <p className='crypto-symbol'>{coin.symbol}</p>
                {coin.price_change_percentage_24h >= 0 ? <p className='change-dayly green'>+{coin.price_change_percentage_24h}%</p> : <p className='change-dayly red'>{coin.price_change_percentage_24h}%</p>}
              </div>
              <p className='crypto-value'>${coin.current_price}</p>
          </Link>
        </SwiperSlide>
      ))}
      </Swiper>
    </>
  );
}
