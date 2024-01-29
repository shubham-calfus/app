import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./api/usersApi/usersApi";
import stepReducer from "@/lib/features/customerRegistrationSlice/customerRegistrationSlice";
export const store = configureStore({
  reducer: {
    steps: stepReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<AppStore['getState']>
// export type AppDispatch = AppStore['dispatch']
