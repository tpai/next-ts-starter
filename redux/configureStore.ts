import { configureStore as createStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import createRootReducer from '@/redux/reducers';
import { setStore } from '@/utils/getStore';

function configureStore() {
  const store = createStore({
    reducer: createRootReducer(),
    devTools: { shouldHotReload: false },
  });
  setStore(store);

  return store;
}

const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<RootState>(configureStore);

export default configureStore;
