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
  const API_URL = 'https://mohammadelia30.ir/shabab/api/factors/index/1';

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

function ChartAdminDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['chartData'],
    queryFn: fetchChartData,
  });

  const chartData = data || {};

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
        position: 'bottom',
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value + ' م';
          },
        },
      },
      x: {
        ticks: {
          callback: function (value, index, values) {
            return this.getLabelForValue(value);
          },
        },
      },
    },
  };

  if(isLoading){
    return(
      <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14'>
      <div className='w-[609px] h-[456px] dark:bg-black bg-white py-10 ml-6 shadow-xl rounded-lg px-6'>
        <div className='py-4'>
          <p className='font-medium dark:text-white text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
      <div className='flex justify-center items-center mt-40'>
<span className="loading loading-dots text-accent  loading-lg"></span>
      </div>
      </div>
      </div>
    )
  }

  if(isError){
    return(
      <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14'>
      <div className='w-[609px] h-[456px] dark:bg-black bg-white py-10 ml-6 shadow-xl rounded-lg px-6'>
        <div className='py-4'>
          <p className='font-medium dark:text-white text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
      <div className='flex justify-center items-center mt-40'>
<p>{(isError).message}</p>
      </div>
      </div>
      </div>
    )
  }

  return (
    <div className='flex justify-center items-center md:justify-center xl:justify-center xl:ml-14'>
      <div className='w-[609px] h-[456px] dark:bg-black bg-white py-10 ml-6 shadow-xl rounded-lg px-6'>
        <div className='py-4'>
          <p className='font-medium dark:text-white text-sm text-[#000000]'>
            نمودار موجودی 6 ماه اول صندوق
          </p>
        </div>
        <div>
            <Line options={options} data={chartConfig} />
        </div>
      </div>
    </div>
  );
}

export default ChartAdminDashboard;

