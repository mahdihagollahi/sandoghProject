
import { createSlice } from '@reduxjs/toolkit';

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    selectPayment: [], 
  },
  reducer: {
    selectPayment: (state, action) => {
      const { id, payment, text } = action.payload;
      state.selectPayment.push({ id, payment, text });
    },
    clearSelection: (state) => {
      state.selectPayment = [];
    },
  },
});

export const { selectPayment, clearSelection } = paymentSlice.actions;

export default paymentSlice.reducer;