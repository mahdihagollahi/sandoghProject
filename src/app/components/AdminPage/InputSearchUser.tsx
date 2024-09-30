import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios'; 
import ImageSearch from "@/app/assent/Img/adminPanel/Search.svg";

interface User {
    id: number;
    first_name: string;
    last_name: string;
    father_name: string;
  }

const InputSearchUser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [results, setResults] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searchTerm) {
      setResults([]);
      setError(null);
      return;
    }

    const searchUser = async () => {
      const authToken = localStorage.getItem('authToken');
      if (!authToken) {
        setError('Token not found');
        return;
      }

      setLoading(true);
      setError(null); 

      try {
        const response = await axios.get(`https://mohammadelia30.ir/shabab/api/users/filter?filter[full_name]=${searchTerm}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        const data = response.data;

        if (data.users && data.users.length > 0) {
          setResults(data.users); 
        } else {
          setResults([]);
          setError('کاربری وجود ندارد'); 
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        setError('مشکلی در دریافت اطلاعات رخ داده است.');
      }
    };

    const delayDebounceFn = setTimeout(() => {
      searchUser();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <div className="flex mr-[39%] items-center gap-2">
        <label className="input flex items-center border border-[#E2E8F0] dark:bg-[#4F5D74] gap-4">
          <Image src={ImageSearch} width={20} height={20} alt="search" />
          <input
            className="w-[32rem] h-[32rem]"
            type="search"
            placeholder="جستجو نام کاربری یا شماره تلفن"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </label>
      </div>

  
      {loading &&    <span className="loading loading-dots mr-[80%] mt-2 text-[#4FD1C5] loading-lg"></span>}

      
      {error && <p>{error}</p>}

      
      {results.length > 0 && (
        <div className='bg-white dark:bg-[#4F5D74] mt-4 rounded-lg mr-[39%] w-[97.5%] p-3'>
          <h3>نتایج:</h3>
          <ul>
            {results.map(user => (
              <li key={user.id} className='flex gap-11'>
                <p>نام: {user.first_name}</p>
                <p>نام خانوادگی: {user.last_name}</p>
                <p>نام پدر: {user.father_name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InputSearchUser;
