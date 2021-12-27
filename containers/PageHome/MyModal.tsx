import { FC } from 'react';

import Modal from '@/components/Modal';

type Props = {
  isModalOpen: boolean;
  onClose: () => void;
};

const MyModal: FC<Props> = ({ isModalOpen, onClose }) => {
  return (
    <Modal isOpen={isModalOpen} onClose={onClose}>
      modal
    </Modal>
  );
};

export default MyModal;
