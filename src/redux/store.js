import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './phonebook-reducer';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './phonebook-reducer';
import { userApi } from './auth/auth-slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
    userApi.middleware,
  ],
});
setupListeners(store.dispatch);

const exportedStor = {
  store,
};
export default exportedStor;
