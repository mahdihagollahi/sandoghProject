import React from 'react'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function CharAdminDashboard() {
    const data = {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
        datasets: [
          {
            label: 'محتوا',
            data: [120, 90, 60, 30, 10, 0],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: false,
            tension: 0.4
          },
          {
            label: 'محتوا',
            data: [120, 90, 60, 30, 10, 0],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.4
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
            display: true,
            // text: 'نمودار موجودی 6 ماه اول صندوق'
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
    <div className='flex justify-center mt-2 items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
    <div className=' w-[630px] h-[440px] bg-white -mt-[460px]   shadow-xl rounded-lg px-4 '>
        <div className='py-4 '>
          <p className='font-medium text-sm text-[#000000]'>
          نمودار موجودی 6ماه اول صندوق
          </p>
        </div>
     <div>
     <Line
      
      options={options}
    data={data} 
    

    />

     </div>
  
    </div>
        </div>
  )
}

export default CharAdminDashboard





