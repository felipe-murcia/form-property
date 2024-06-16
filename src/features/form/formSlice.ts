// features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeOffer, TypeProperty } from '../../constant/global';

interface PropertyState {  
  step: number; 
}

const initialState: PropertyState = {
  step: 1, 
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    }, 
  },
});

export const { setStep } = formSlice.actions;

export default formSlice.reducer;
