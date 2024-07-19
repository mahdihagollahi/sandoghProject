import React from 'react';
import UserTable from '@/app/components/UserTable';
import Image1 from '../assent/Img/adminPanel/Avatar.svg';
import Image2 from '../assent/Img/adminPanel/Avatar-2.svg';
import Image3 from '../assent/Img/adminPanel/avatar online copy.svg';
import Image4 from '../assent/Img/adminPanel/avatar online.svg';

interface User {
  id: number;
  src: string;
  name: string;
  joinDate: string;
  loans: string;
}

const users: User[] = [
  { id: 1, src: Image1, name: 'امیر قنبری', joinDate: '1404/01/16', loans: '1 وام' },
  { id: 2, src: Image2, name: 'مینا قنبری', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 3, src: Image3, name: 'فاطمه طالبیان', joinDate: '1404/01/16', loans: '2 وام' },
  { id: 4, src: Image4, name: 'نگین سعیدی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 5, src: Image1, name: 'کنی سپهری', joinDate: '1404/01/16', loans: '2 وام' },
  { id: 6, src: Image2, name: 'نگین سعیدی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 8, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 9, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 10, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 12, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 13, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 14, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
  { id: 15, src: Image3, name: 'سکینه داوودی', joinDate: '1404/01/16', loans: '0 وام' },
];

const App: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold my-4'>لیست کاربران</h1>
      <UserTable users={users} />
    </div>
  );
};

export default App;
