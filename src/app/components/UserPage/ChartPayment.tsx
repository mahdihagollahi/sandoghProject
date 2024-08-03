// "use client"
// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import 'tailwindcss/tailwind.css';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const data = {
//   labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
//   datasets: [
//     {
//       label: 'موجودی حساب:',
//       data: [500, 1000, 500, 750, 250, 500, 1000, 750, 500, 250, 750, 500],
//       borderColor: '#00bcd4',
//       backgroundColor: '#00bcd4',
//     },
//     {
//       label: 'مبالغ واریز اشتراک ماهانه:',
//       data: [500, 250, 750, 500, 750, 500, 250, 500, 1000, 500, 750, 1000],
//       borderColor: '#1c1e21',
//       backgroundColor: '#1c1e21',
//     },
//   ],
// };

// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
      
//     },
//   },
// };

// const ChartPayment = () => {
//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <div className="bg-white p-8 rounded-lg shadow-md w-[100%] h-[200%]">
//         <div className="flex justify-between mb-2">
//           <p className='text-[#2D3748] font-bold'>حساب واریز و موجودی صندوق</p>
        
//         </div>
//         <Line className='w-[100%] h-[10%]' data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default ChartPayment;



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
  labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11' , '12'],
  datasets: [
    {
      label: 'موجودی حساب:',
      data: [1000,  750,  500,  250, 0],
      borderColor: '#00bcd4',
      backgroundColor: '#00bcd4',
      fill: false,
      tension: 0.4,
    },
    {
      label: 'مبالغ واریز اشتراک ماهانه:',
      data: [  1000,750, 500, 250,  0],
      borderColor: '#1c1e21',
      backgroundColor: '#1c1e21',
      fill: false,
      tension: 0.4,
    },
  ],
};

// محاسبه مجموع موجودی حساب
const accountBalance = data.datasets[0].data.reduce((acc, value) => acc + value, 0);

// محاسبه میانگین مبلغ اشتراک ماهانه
const monthlySubscription = data.datasets[1].data.reduce((acc, value) => acc + value, 0) / data.datasets[1].data.length;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.dataset.label} ${tooltipItem.raw} تومان`,
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: function(value) {
          return [1000, 750, 500, 250, 0].includes(value) ? value : null;
        },
        stepSize: 250,
      }
     
    },
  },
};

const ChartPayment = () => {
  return (
    <div className="flex flex-col items-center  ">
      <div className="bg-white px-16 py-12 rounded-lg shadow-md  ">
        <div className="flex justify-between mb-2 text-[#1c1e21]">
          <div className="flex flex-col">
            <span className="font-bold text-base">حساب واریز و موجودی صندوق</span>
          </div>
        </div>
        <div className="flex justify-between gap-20 mb-2">
          <div className="flex flex-col">
            <span className="text-[#00bcd4] text-sm">موجودی حساب: {accountBalance.toLocaleString()} تومان</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[#1c1e21] text-sm">میانگین واریز اشتراک ماهانه: {monthlySubscription.toFixed(2)} تومان</span>
          </div>
        </div>
        <Line className='w-[100%] h-12' data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartPayment;
