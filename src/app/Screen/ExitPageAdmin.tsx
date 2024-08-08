// import React,{useState,useEffect} from 'react'
// import Modal from '../components/AdminPage/Modal'
// import ModaloutAdmin from '../components/UserPage/ModaloutAdmin';

// function ExitPageAdmin() {
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const handleOpenModal = () => {
//     setIsModalVisible(true);
//   };

//   useEffect(() => {
//     handleOpenModal();
//   }, []);

//   const handleCloseModal = () => {
//     setIsModalVisible(false);
//   };
//   return (
//     <div>
//       {isModalVisible && (

//         <ModaloutAdmin handleCloseModal={handleCloseModal}/> 
//       )}
//        <Modal isVisible={isModalVisible}/>
//     </div>
//   )
// }

// export default ExitPageAdmin

import React, { useState, useEffect } from 'react';
import Modal from '../components/AdminPage/Modal';
import ModaloutAdmin from '../components/UserPage/ModaloutAdmin';

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
    <div>
     
      <Modal isVisible={isModalVisible}>
        <ModaloutAdmin handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default ExitPageAdmin;
