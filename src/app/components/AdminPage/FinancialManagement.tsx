import { useState } from "react";
import DateDropDown from "@/app/components/AdminPage/DateDropDown";
import ChartMounthFinantial from "@/app/components/AdminPage/ChartMounthFinantial";
import ChartFinancial from "@/app/components/AdminPage/chartFinancial";
import ViewDeposit from "./ViewDeposit";
import axios from "axios";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

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

const fetchChartData = async (): Promise<ChartDataInterface> => {
  const API_URL = "https://fundcharitynet.com/api/inventory/index";
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    throw new Error("No auth token found");
  }

  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  const inventorData = response.data.inventor;

  const labels = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const incomeData = inventorData.map((item: { income: number }) => item.income || 0);
  const outcomeData = inventorData.map((item: { outcome: number }) => parseInt(item.outcome) || 0);

  return {
    labels: labels,
    datasets: [
      {
        label: "درآمد",
        data: incomeData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
      {
        label: "هزینه",
        data: outcomeData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };
};

const queryClient = new QueryClient();

const FinancialManagementComponent = () => {
  const [selectedYear, setSelectedYear] = useState<string>("۱۴۰۳");
  const {
    data: chartData,
    isLoading,
    isError,
  } = useQuery<ChartDataInterface>({
    queryKey: ["chartData", selectedYear],
    queryFn: fetchChartData,
  });

  const handleSelectYear = (year: string) => {
    setSelectedYear(year);
  };

  if (isLoading) {
    return (
      <div className="">
        <div className="flex mt-[51px] gap-[78%] items-center mb-2">
          <div className="mr-1">
            <p className="font-bold dark:text-white text-lg">مدیریت مالی</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center md:justify-center xl:justify-center xl:mt-2">
            <div className="bg-white dark:bg-[#4F5D74] -mr-[5%] shadow-md rounded-md w-[94.5%] pb-[27%]">
              <div className="flex gap-52 pt-8">
                <div className="mr-[50%]">
                  <DateDropDown onSelectYear={handleSelectYear} />
                </div>
              </div>
              <div className="flex justify-center mt-40">
                <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
              </div>
            </div>
          </div>

          <div className="flex mt-2 gap-4 items-center">
            <div className="flex items-center md:justify-center xl:justify-center">
              <div className="bg-white dark:bg-[#4F5D74] w-[580px] pr-8 pb-[20%]  shadow-md rounded-md">
                <div className="flex pt-8">
                  <div className="mr-[24%]">
                    <DateDropDown onSelectYear={handleSelectYear} />
                  </div>
                </div>
                <div className="flex justify-center mt-40">
                  <span className="loading loading-dots text-[#4FD1C5] loading-lg"></span>
                </div>
              </div>
            </div>

            <div className="ml-14">
              <ViewDeposit />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="">
        <div className="flex mt-[51px] gap-[78%] items-center mb-2">
          <div className="mr-1">
            <p className="font-bold dark:text-white text-lg">مدیریت مالی</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center md:justify-center xl:justify-center xl:mt-2">
            <div className="bg-white dark:bg-[#4F5D74] -mr-[5%] shadow-md rounded-md w-[94.5%] pb-[27%]">
              <div className="flex gap-52 pt-8">
                <div className="mr-[50%]">
                  <DateDropDown onSelectYear={handleSelectYear} />
                </div>
              </div>
              <div className="flex justify-center mt-40">
                <p>خطا در بارگیری داده‌ها</p>
              </div>
            </div>
          </div>

          <div className="flex mt-2 gap-4 items-center">
            <div className="flex items-center md:justify-center xl:justify-center">
              <div className="bg-white dark:bg-[#4F5D74] w-[580px] pr-8 pb-[20%]  shadow-md rounded-md">
                <div className="flex pt-8">
                  <div className="mr-[24%]">
                    <DateDropDown onSelectYear={handleSelectYear} />
                  </div>
                </div>
                <div className="flex justify-center mt-40">
                  <p>خطا در بارگیری داده‌ها</p>
                </div>
              </div>
            </div>

            <div className="ml-14">
              <ViewDeposit />
            </div>
          </div>
        </div>
      </div>
    );
  }

  const firstHalfChartData: ChartDataInterface | null = chartData
    ? {
        labels: chartData.labels.slice(0, 6),
        datasets: chartData.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data.slice(0, 6),
        })),
      }
    : null;

  const annualChartData = chartData;

  return (
    <div className="">
      <div className="flex mt-[51px] gap-[78%] items-center mb-2">
        <div className="mr-1">
          <p className="font-bold dark:text-white text-lg">مدیریت مالی</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center md:justify-center xl:justify-center xl:mt-2">
          <div className="bg-white dark:bg-[#4F5D74] -mr-[5%] shadow-md rounded-md w-[94.5%] 2xl:-mr-[32.5%] 2xl:w-[67.5%]">
            <div className="flex gap-52 pt-8">
              <div className="mr-[50%]">
                <DateDropDown onSelectYear={handleSelectYear} />
              </div>
            </div>
            <div className="pb-10">
              {firstHalfChartData && (
                <ChartMounthFinantial chartData={firstHalfChartData} />
              )}
            </div>
          </div>
        </div>

        <div className="flex mt-2 gap-4 items-center">
          <div className="flex items-center md:justify-center xl:justify-center">
            <div className="bg-white dark:bg-[#4F5D74] w-[580px] pr-8 py-[10px] mt-2 shadow-md rounded-md">
              <div className="flex pt-8">
                <div className="mr-[24%]">
                  <DateDropDown onSelectYear={handleSelectYear} />
                </div>
              </div>

              {annualChartData && (
                <ChartFinancial chartData={annualChartData} />
              )}
            </div>
          </div>

          <div className="ml-14">
            <ViewDeposit />
          </div>
        </div>
      </div>
    </div>
  );
};

const FinancialManagement = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FinancialManagementComponent />
    </QueryClientProvider>
  );
};

export default FinancialManagement;
