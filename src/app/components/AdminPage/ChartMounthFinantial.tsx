import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DataSet {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  fill: boolean;
  tension: number;
}

interface ChartDataInterface {
  labels: string[];
  datasets: DataSet[];
}

interface ChartData {
  income: number[];
  outcome: number[];
}

const fetchChartData = async (): Promise<ChartData> => {
  const API_URL = 'https://mohammadelia30.ir/shabab/api/inventory/index';

  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('No auth token found');
  }

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

const ChartMounthFinantial =() =>{
  const { data, isLoading, isError } = useQuery({
    queryKey: ['chartData'],
    queryFn: fetchChartData,
  });


  const chartData:Partial<ChartData> = data || {};
  
    const chartConfig = {
      labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
      datasets: [
        {
          label: 'درامد',
          data: chartData.income ,
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
          data: chartData.outcome ,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          fill: false,
          tension: 0.1,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        },
      ],
    };
  
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (tickValue: string | number) {
              return `${tickValue} ;م`
            },
          },
        },
        x: {
          ticks: {
            callback: function (tickValue: string | number, index: number, ticks: any[]) {
              return tickValue.toString()
            },
          },
        },
      },
    };
    if(isLoading){
      return(
        <div className='flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
        <div className=' w-[880px] h-[390px]  dark:bg-[#4F5D74]   pr-20 '>
            <div className='  mb-10'>
              <p className='font-medium -mt-10 text-sm dark:text-white text-[#000000]'>
              نمودار موجودی 6ماه اول صندوق
              </p>
            </div>
        <div className='flex justify-center items-center mt-40'>
  <span className="loading loading-dots text-accent  loading-lg"></span>
        </div>
        </div>
        </div>
      )
    }

    
  return (
    <div className='flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
    <div className=' w-[880px] h-[390px]  dark:bg-[#4F5D74]   pr-20 '>
        <div className='  mb-10'>
          <p className='font-medium -mt-10 text-sm dark:text-white text-[#000000]'>
          نمودار موجودی 6ماه اول صندوق
          </p>
        </div>
     <div className=''>
     <Line
      
      options={options}
      data={chartConfig}
    

    />

     </div>
  
    </div>
        </div>
  )
}

export default ChartMounthFinantial






