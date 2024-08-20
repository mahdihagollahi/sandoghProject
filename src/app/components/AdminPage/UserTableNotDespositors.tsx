import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import SendIconImage from '@/src/app/assent/Img/adminPanel/SendIcon.svg';
import Modal from './Modal';
import TextAreaComponent from '@/src/app/components/AdminPage/TextAreaComponent';
import Paginate from './Paginate';

const UserTable = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const itemsPerPage = 7;

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    } else {
      console.log('No auth token found');
    }
  }, []);

  const pageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentPageData = users.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(users.length / itemsPerPage);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedUser(null);
  };

  const handleSend = async (message) => {
    if (!authToken) {
      console.error('No auth token available');
      return;
    }

    try {
      const response = await axios.post(
        'http://hosseinshabab.iapp.ir/api/installments/show/admin',
        {
          userId: selectedUser.id, 
          message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,  
          },
        }
      );
      console.log('Response:', response.data);
      handleCloseModal();
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="p-4 pl-20 ">
        <div className="max-w-full bg-white shadow-md overflow-hidden p-10 dark:bg-inherit dark:text-white">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="w-[20%] pl-8 py-2">شماره قسط</th>
                <th className="w-[20%] pl-8 py-2">نام کاربر</th>
                <th className="w-[29%] pl-20 py-2">مبلغ واریز</th>
                <th className="w-[23%] pl-24 py-2 whitespace-nowrap">تاریخ سر رسید</th>
                <th className="w-[12%] pl-[110px] py-2">یادآوری</th>
              </tr>
            </thead>
          </table>
          <div>
            <table className="w-full mt-[3%] table-auto border-collapse">
              <tbody className="divide-y divide-gray-200 space-y-4">
                {currentPageData.map((user, index) => (
                  <tr key={index}>
                    <td className="w-2/12 py-8 px-4 flex gap-20">قسط {user.id}</td>
                    <td className="w-[16%] py-8 px-4">{user.name}</td>
                    <td className="w-[25%] py-8 px-4 text-[#718096]">
                      <p>{user.depositAmount} تومان</p>
                    </td>
                    <td className="w-2/12 py-2 px-4">{user.joinDate}</td>
                    <td className="w-3/12 py-2 px-4">
                      <button
                        className="py-2 px-6 border flex items-center gap-2 border-teal-400 p-1 rounded-md"
                        onClick={() => handleOpenModal(user)}
                      >
                        <Image src={SendIconImage} width={24} height={24} alt="" />
                        <p className="font-normal text-sm text-teal-400">ارسال یادآوری</p>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Paginate currentPageData={currentPageData} pageCount={pageCount} pageClick={pageClick} />
      {isModalVisible && (
        <Modal isVisible={isModalVisible}>
          <TextAreaComponent onClose={handleCloseModal} onSend={handleSend} />
        </Modal>
      )}
    </div>
  );
};

export default UserTable;

