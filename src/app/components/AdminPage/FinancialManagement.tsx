import { useState } from 'react';
import DateDropDown from '@/src/app/components/AdminPage/DateDropDown';
import CharAdminDashboard from '@/src/app/components/AdminPage/CharAdminDashboard';
import ViewDeposit from './ViewDeposit';

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
  
const data: { [key: string]: ChartDataInterface } = {
  '۱۴۰۳': {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'ورودی',
        data: [120, 90, 60, 30, 10, 0],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'خروجی',
        data: [100, 70, 40, 20, 5, 0],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.4
      }
    ]
  },
  '۱۴۰۲': {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
    datasets: [
      {
        label: 'ورودی',
        data: [110, 85, 70, 55, 40, 25],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
        tension: 0.4
      },
      {
        label: 'خروجی',
        data: [95, 80, 65, 50, 35, 20],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.4
      }
    ]
  },
};

export default function FinancialManagement() {
  const [selectedYear, setSelectedYear] = useState<string>('۱۴۰۳');
  const [filteredData, setFilteredData] = useState<ChartDataInterface>(data['۱۴۰۳']);

  const handleSelectYear = (year:string) => {
    setSelectedYear(year);
    setFilteredData(data[year]);
  };

  return (
    <div>

  
    
    <div className="min-h-screen flex flex-col items-center justify-center">
       <div className='flex justify-center  items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
       <div className=' w-[1022px]  bg-white mt-20   shadow-xl rounded-lg px-4 '>
        <div className='flex gap-52 pt-8 '>
        <div className=' mr-[32%] '>
          <p className='font-medium text-sm text-[#394860] mt-2'>
          نمودار موجودی 6ماه اول صندوق
          </p>
        </div>

        <div className=' '>
        <DateDropDown onSelectYear={handleSelectYear} />
        </div>
        </div>
        <div className='pb-10'>
        <CharAdminDashboard data={filteredData} />

        </div>

        
  </div>
  </div>

  <div className='mr-[50%] -mt-[15%]'>
          <ViewDeposit/>
        </div>
  </div>
  </div>
  );
}
