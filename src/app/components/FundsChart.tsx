import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
    datasets: [
      {
        label: 'موجودی صندوق',
        data: [20, 80, 100, 120, 80, 60, 40, 80, 100, 140, 180, 200],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y;
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        suggestedMin: 0,
        suggestedMax: 200,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default ChartComponent;
