import { FC, useCallback } from 'react';

import Helmet from '@/components/Helmet';
import useModalHandlers from '@/hooks/useModalHandlers';

import MyModal from './MyModal';

const PageHome: FC = () => {
  const { modalId, isModalOpen, open, close } = useModalHandlers();
  const handleMyModalClick = useCallback(() => {
    open();
  }, [open]);

  return (
    <>
      <Helmet />
      <section className="flex flex-col items-center justify-center h-screen text-gray-400 bg-gray-900 body-font">
        <div>body</div>
        <button
          onClick={handleMyModalClick}
          className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
          open modal
        </button>
      </section>
      <MyModal key={modalId} isModalOpen={isModalOpen} onClose={close} />
    </>
  );
};

export default PageHome;
