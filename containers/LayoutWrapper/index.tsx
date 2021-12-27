import { FC } from 'react';

const LayoutWrapper: FC = ({ children }) => {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">header</header>
      <div className="content-container">{children}</div>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
          <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0">footer</p>
        </div>
      </footer>
    </>
  );
};

export default LayoutWrapper;
