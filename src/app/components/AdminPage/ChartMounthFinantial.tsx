import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartProps {
  chartData: any; 
}

const ChartMounthFinantial: React.FC<ChartProps> = ({ chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      
      },
    },
  };

  const incomeData = chartData?.datasets?.[0]?.data || [];
  const outcomeData = chartData?.datasets?.[1]?.data || [];

  const chartConfig = {
    labels: chartData?.labels || [],
    datasets: [
      {
        label: "ورودی",
        data: incomeData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.1,
      },
      {
        label: "خروجی",
        data: outcomeData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2">
      <div className=" w-[880px] h-[390px]  dark:bg-[#4F5D74]   pr-20 ">
        <div className="  mb-10">
          <p className="font-medium -mt-10 text-sm dark:text-white text-[#000000]">
            نمودار موجودی 6ماه اول صندوق
          </p>
        </div>
        <div className="">
          <Line options={options} data={chartConfig} />
        </div>
      </div>
    </div>
  );
};

export default ChartMounthFinantial;
