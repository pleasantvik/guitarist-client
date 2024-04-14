import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { configuredApi } from "@/services";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "@/features/auth/authSlice";
import userSlice from "@/features/user/userSlice";
import notificationSlice from "@/features/notification/notificationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
    notification: notificationSlice,
    // Add the generated reducer as a specific top-level slice
    [configuredApi.reducerPath]: configuredApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([configuredApi.middleware]),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
