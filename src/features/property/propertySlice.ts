// features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypeOffer, TypeProperty } from '../../constant/global';

interface PropertyState { 
  description: string;
  price: number | null;
  type_property:  TypeProperty | null;
  type_offer: TypeOffer;
  bathroom: number;
  bedroom: number;
  area: number;
  features: [];
  images:[]
}

const initialState: PropertyState = {
  description: '',
  price: null,
  type_property: null,
  type_offer: 'Arriendo',
  bathroom: 12,
  bedroom: 0,
  area: 0,
  features: [],
  images: []
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setTypeOffer: (state, action: PayloadAction<TypeOffer>) => {
      state.type_offer = action.payload;
    },
    setTypeProperty: (state, action: PayloadAction<TypeProperty>) => {
      state.type_property = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setDescription, setPrice, setTypeOffer, setTypeProperty } = propertySlice.actions;

export default propertySlice.reducer;
