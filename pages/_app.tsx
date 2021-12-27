import '@/styles/globals.css';

import { FC } from 'react';
import { AppProps } from 'next/app';

import LayoutWrapper from '@/containers/LayoutWrapper';
import { wrapper } from '@/redux/configureStore';

const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <LayoutWrapper>
    <Component {...pageProps} />
  </LayoutWrapper>
);

export default wrapper.withRedux(WrappedApp);
