import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS , CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CharAdminDashboard() {
    
    const data ={
        labels : ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets :[
            {
                label:"محتوا",
                data: [60 , 55 , 50 , 70 , 65 , 80],
                borderColor : 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill:false,
                tension: 0.4
            },
            {
                label: 'محتوا',
                data: [60, 50, 45, 40, 35, 30],
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
                tension: 0.4
              }
        ]
    }

    const option ={
      responsive:true,
      plugin:{
        legend:{
            position:'bottom'
        },
        title:{
            display:true,
            text:'نمودار موجودی 6 ماه اول صندوق'
        }
      },
      scales:{
        y:{
            beginAtZerio:false,
            ticks:{
                callback:function(value){
                    return value + 'م'
                }
            }
        },
        x:{
            ticks:{
                callback:function(value , index , values){
                    return this.getLabelForValue(value)
                }
            }
        }
      }
    }
  return (
  <div className='flex justify-center items-center mb-9'>
    <div className=' w-96'>
    <Line data={data} option={option} />

    </div>
        </div>
  )
}

export default CharAdminDashboard