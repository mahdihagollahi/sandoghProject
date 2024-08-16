import { useState } from 'react';
import Image from 'next/image';
import arrowImage from '@/src/app/assent/Img/adminPanel/back.svg'
import DateDropDown from '@/src/app/components/AdminPage/DateDropDown';
import ChartMounthFinantial from '@/src/app/components/AdminPage/ChartMounthFinantial';
import ChartFinancial from '@/src/app/components/AdminPage/chartFinancial';

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

  
<div className='flex mt-8  justify-between items-center mb-2   '>
            <div className='mr-2 '>
                <p className='font-bold dark:text-white text-lg'>
                مدیریت مالی                
                </p>
            </div>
            <div className='ml-10   '>
              <a href="" className='flex dark:text-white items-center'>
              بازگشت
              <Image
                src={arrowImage}
                width={38}
                height={38}
                alt='arrow'

                />
              </a>
              
            </div>
        </div>


    <div className="mt-6 ">
       <div className='flex   items-center   md:justify-center  xl:justify-center xl:ml-14  xl:mt-2'>
       <div className='  bg-white dark:bg-black   shadow-xl rounded-lg px-12 '>
        <div className='flex gap-52 pt-8 '>
        <div className=' mr-[50%]'>
        <DateDropDown onSelectYear={handleSelectYear} />
        </div>
        </div>
        <div className='pb-10'>
        <ChartMounthFinantial data={filteredData} />

        </div>

        
  </div>
  </div>


     <div className='flex justify-between mt-8 gap-4  items-center'>

    
     <div className='flex   items-center   md:justify-center  xl:justify-center   xl:mt-2'>
     <div className='  bg-white  dark:bg-black    shadow-xl rounded-lg '>
     <div className='flex  pt-8 '>
        <div className=' mr-[24%]'>
        <DateDropDown onSelectYear={handleSelectYear} />
        </div>
        </div>
         
          <ChartFinancial data={filteredData}/>
        </div>
        </div>

        <div className='ml-12 '>
        
         <ViewDeposit/>
        </div>
  </div>
  </div>
  </div>
  );
}
