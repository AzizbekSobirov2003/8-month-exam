import React, { useEffect, useState } from 'react'
import instance from '../../services/api'
import './SingleCrypto.scss'
import ReactApexCharts from 'react-apexcharts'
// import ApexCharts from 'apexcharts'
const SingleCrypto = () => {
  const [coin] = useState(window.location.pathname)
  const [coinInfo,setCoinInfo] = useState(null)
  const [datas,setData] = useState([])
  useEffect(()=>{
    async function loadData(){
      const response = await instance(
        '/coins/bitcoin/market_chart',
        {
          params: {
            vs_currency: 'usd',
            days:30,
            interval: 'daily',
          },
        }
      );
      response.data.prices && setData(response.data.prices)
    }
    loadData()
},[])
  console.log(datas)
  const [state] = useState({
    series: [{
      data: [[1697155200000, 26729.137205815106],
      [1697241600000, 26841.136220644406],
      [1697328000000, 26863.183569079916],
      [1697414400000, 27150.29700140705],
      [1697500800000, 28513.30993247735],
      [1697587200000, 28417.72175169982],
      [1697673600000, 28328.245198134824],
      [1697760000000, 28715.748142407952],
      [1697846400000, 29677.392888476206],
      [1697932800000, 29920.07449265145],
      [1698019200000, 30019.38050086351],
      [1698105600000, 32953.262760830985],
      [1698192000000, 33846.72425733224],
      [1698278400000, 34471.986031672015],
      [1698364800000, 34174.451552912586],
      [1698451200000, 33899.09305644032],
      [1698537600000, 34092.630932838576],
      [1698624000000, 34556.242814761616],
      [1698710400000, 34498.70391946407],
      [1698796800000, 34672.2892841885],
      [1698883200000, 35457.45491210553],
      [1698969600000, 34924.05545044328],
      [1699056000000, 34731.38136896784],
      [1699142400000, 35048.407834901074],
      [1699228800000, 35061.92874919579],
      [1699315200000, 35031.26888208706],
      [1699401600000, 35436.53762957962],
      [1699488000000, 35795.080630710196],
      [1699574400000, 36768.42081912672],
      [1699660800000, 37344.249000720345],
      [1699703066000, 37032.77180773934],]
    }],
    options: {
      chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
          autoScaleYaxis: true
        }
      }},  
      annotations: {
        yaxis: [{
          y: 30,
          borderColor: '#999',
          label: {
            show: true,
            text: 'Support',
            style: {
              color: "#fff",
              background: '#00E396'
            }
          }
        }],
        xaxis: [{
          x: new Date('14 Nov 2012').getTime(),
          borderColor: '#999',
          yAxisIndex: 0,
          label: {
            show: true,
            text: 'Rally',
            style: {
              color: "#fff",
              background: '#775DD0'
            }
          }
        }]
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        style: 'hollow',
      },
      xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      selection: 'one_year',
  })
  console.log(state.series.data)
  console.log(state)
//   function updateData(timeline){
//     setState({
//     selection: timeline
//     })
  
//   switch (timeline) {
//     case 'one_month':
//       ApexCharts.exec(
//         'area-datetime',
//         'zoomX',
//         new Date('28 Jan 2013').getTime(),
//         new Date('27 Feb 2013').getTime()
//       )
//       break
//     case 'six_months':
//       ApexCharts.exec(
//         'area-datetime',
//         'zoomX',
//         new Date('27 Sep 2012').getTime(),
//         new Date('27 Feb 2013').getTime()
//       )
//       break
//     case 'one_year':
//       ApexCharts.exec(
//         'area-datetime',
//         'zoomX',
//         new Date('27 Feb 2012').getTime(),
//         new Date('27 Feb 2013').getTime()
//       )
//       break
//     case 'ytd':
//       ApexCharts.exec(
//         'area-datetime',
//         'zoomX',
//         new Date('01 Jan 2013').getTime(),
//         new Date('27 Feb 2013').getTime()
//       )
//       break
//     case 'all':
//       ApexCharts.exec(
//         'area-datetime',
//         'zoomX',
//         new Date('23 Jan 2012').getTime(),
//         new Date('27 Feb 2013').getTime()
//       )
//       break
//     default:
//       break;
//   }
// }
  useEffect(()=>{
      async function loadOneCoin(){
          const response = await instance(`coins${coin}`)
          response.data && setCoinInfo(response.data)
      }
      loadOneCoin()
  },)
  
  return(
    coinInfo ? 
        <div className='single-wrapper'>
          <div className="coin_info">
              <img src={coinInfo.image.large} alt="" />
              <h3 className='coin-title'>{coinInfo.name}</h3>
              <p className='coin-desc'>{coinInfo.description.en.split(".")[0]+'.'}</p>            
              <p className='coin-rank'>Rank: {coinInfo.market_cap_rank}</p>
              <p className='coin-rank'>Current Price: ${coinInfo.market_data.current_price.usd}</p>
              <p className='coin-rank'>Market Cap: ${coinInfo.market_data.market_cap.usd}</p>
    
          </div>
          <div className='coin_diagramm'>
                <div id="chart">
                    <div class="toolbar">
                        {/* <button id="one_month" onClick={()=>updateData('one_month')} className={ (state.selection==='one_month' ? 'active' : '')}></button> */}
                          {/* &nbsp;
                        <button id="six_months"  onClick={()=>updateData('six_months')} className={ (state.selection==='six_months' ? 'active' : '')}></button>
                          &nbsp;
                        <button id="one_year" onClick={()=>updateData('one_year')} className={ (state.selection==='one_year' ? 'active' : '')}></button>
                          &nbsp;
                        <button id="ytd" onClick={()=>updateData('ytd')} className={ (state.selection==='ytd' ? 'active' : '')}></button>
                          &nbsp;
                       <button id="all" onClick={()=>updateData('all')} className={ (state.selection==='all' ? 'active' : '')}></button> */}
                    </div>
                    <div id="chart-timeline">
                        <ReactApexCharts options={state.options} series={state.series} type="area" width={1000} height={500} />
                    </div>
                </div>
            </div>
        </div> : <p>Loading...</p>
  )
}

export default SingleCrypto

