// store.ts
import { configureStore } from '@reduxjs/toolkit';
import propertySlice from '../features/property/propertySlice';
import formSlice from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    property: propertySlice,
    form: formSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;