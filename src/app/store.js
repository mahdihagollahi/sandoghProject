
import { configureStore } from '@reduxjs/toolkit';

import paymentReducer  from './peymentSlice';

export const store = configureStore({
  reducer: {
    payment: paymentReducer, 
  },
});
