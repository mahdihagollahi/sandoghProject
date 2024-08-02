import React from 'react'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ChartAdminDashboard() {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          {
            label: 'ورودی',
            data: [120, 90, 60, 30, 10, 0],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.1,
            pointStyle: 'circle',
            pointRadius: 5, 
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          },
          {
            label: 'خروجی',
            data: [120, 90, 60, 30, 10, 0],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1,
            pointStyle: 'circle',
            pointRadius: 5, 
            pointBackgroundColor: 'rgba(54, 162, 235, 1)',
          }
        ]
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: false,
            
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + ' م';
              }
            }
          },
          x: {
            ticks: {
              callback: function(value, index, values) {
                return this.getLabelForValue(value);
              }
            }
          }
        }
      };
  return (
    <div className='flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
    <div className=' w-[880px] h-[390px] bg-inherit   rounded-lg  pr-20 '>
        <div className='  mb-10'>
          <p className='font-medium -mt-10 text-sm text-[#000000]'>
          نمودار موجودی 6ماه اول صندوق
          </p>
        </div>
     <div className=''>
     <Line
      
      options={options}
    data={data} 
    

    />

     </div>
  
    </div>
        </div>
  )
}

export default ChartAdminDashboard




