"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  datasets: [
    {
      label: 'موجودی حساب:',
      data: [500, 1000, 500, 750, 250, 500, 1000, 750, 500, 250, 750, 500],
      borderColor: '#00bcd4',
      backgroundColor: '#00bcd4',
    },
    {
      label: 'مبالغ واریز اشتراک ماهانه:',
      data: [500, 250, 750, 500, 750, 500, 250, 500, 1000, 500, 750, 1000],
      borderColor: '#1c1e21',
      backgroundColor: '#1c1e21',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      
    },
  },
};

const ChartPament = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-[617px] h-[250px] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md  ">
        <div className="flex justify-between mb-2">
          <div className='text-[#2D3748] font-bold'>حساب واریز و موجودی صندوق</div>
        
        </div>
        <Line className='w-[341px] h-[163px]' data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartPament;
