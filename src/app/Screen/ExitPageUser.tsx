
import React, { useState, useEffect } from 'react';
import Modal from '../components/AdminPage/Modal';
import ModaloutUser from '../components/UserPage/ModaloutUser';

function ExitPageAdmin() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    handleOpenModal(); 
  }, []);

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='dark:bg-[#283B4D]'>
     
      <Modal isVisible={isModalVisible}>
        <ModaloutUser handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default ExitPageAdmin;
