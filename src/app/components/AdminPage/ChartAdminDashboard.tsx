import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface ChartData {
  income: number[];
  outcome: number[];
}

const fetchChartData = async (): Promise<ChartData> => {
  const API_URL = 'https://fundcharitynet.com/api/inventory/index';

  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    throw new Error('لطفا دوباره لاگین کنید');
  }

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  return response.data;
};

function ChartAdminDashboard() {
  const { data, isLoading, isError , error } = useQuery({
    queryKey: ['chartData'],
    queryFn: fetchChartData,
  });

  const chartData :Partial<ChartData> = data || {};

  const chartConfig = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'درآمد',
        data: chartData.income || [120, 90, 60, 30, 10, 0], // Fallback data if API fails
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
        data: chartData.outcome || [120, 90, 60, 30, 10, 0], // Fallback data if API fails
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
      <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14 xl:mr-[5px]'>
      <div className='w-[594px] h-[456px] dark:bg-[#4F5D74] bg-white py-10 ml-[23px]  shadow-md  pl-6 pr-6'>
      <div className='py-4'>
          <p className='font-medium dark:text-white text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
      <div className='flex justify-center items-center mt-40'>
<span className="loading loading-dots text-[#4FD1C5]  loading-lg"></span>
      </div>
      </div>
      </div>
    )
  }

  if(isError){
    return(
      <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14 xl:mr-[5px]'>
      <div className='w-[594px] h-[456px] dark:bg-[#4F5D74] bg-white py-10 ml-[23px] shadow-md  pl-6 pr-6'>
      <div className='py-4'>
          <p className='font-medium dark:text-white text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
      <div className='flex justify-center items-center mt-40'>
<p>{(error as Error).message}</p>
      </div>
      </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14 xl:mr-[5px]'>
      <div className='w-[594px] h-[456px] dark:bg-[#4F5D74] bg-white py-10 ml-[23px] rounded-md shadow-md  pl-6 pr-6'>
      <div className='py-4'>
          <p className='font-medium dark:text-[#FFFFFF] text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
        <div>
            <Line options={options} data={chartConfig} className='dark:text-white' />
        </div>
      </div>
    </div>
  );
}

export default ChartAdminDashboard;


