import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const fetchChartData = async () => {
  const API_URL = 'http://hosseinshabab.iapp.ir/api/factors/index/1';
  const response = await axios.put(API_URL);
  return response.data;
};

function ChartFinancial() {
  const query = useQuery({
    queryKey: ['chartData'],
    queryFn: fetchChartData,
  });

  const { data } = query;

  

  const chartData = data || {};

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

  return (
<div className='flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
  <div className='w-[510px] h-[302px] rounded-lg bg-inherit'>
  <div className=' mr-8 mb-10'>
          <p className='font-medium -mt-10 text-sm dark:text-white text-[#000000]'>
          نمودار صندوق
          </p>
        </div>
  <Line   data={chartConfig} options={options} />

  </div>

 
  </div>
 
  )
  
  
};

export default ChartFinancial;
