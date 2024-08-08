import React,{useState,useEffect} from 'react'
import Modal from '../components/AdminPage/Modal'
import Modalout from '../components/UserPage/ModaloutAdmin';

function ExitPageUser() {
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
      <Modalout/>

        {/* <Modalout handleCloseModal={handleCloseModal}/> */}
        {/* <Modal isVisible={isModalVisible}/> */}
    </div>
  )
}

export default ExitPageUser