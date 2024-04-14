import {
  ILoginInput,
  IRegisterInput,
  IUserInput,
} from "@/interfaces/auth.model";
import {
  AUTH_URL,
  EDIT_USER_PROFILE,
  LOGIN_URL,
  REGISTER_URL,
} from "./constants/auth-url";
import { configuredApi } from ".";

export const authCreateApi = configuredApi
  .enhanceEndpoints({
    addTagTypes: [],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data: ILoginInput) => ({
          url: LOGIN_URL,
          method: "POST",
          data,
        }),
      }),
      register: builder.mutation({
        query: (data: IRegisterInput) => ({
          url: REGISTER_URL,
          method: "POST",
          data,
        }),
      }),
      isAuth: builder.query({
        query: () => ({
          url: AUTH_URL,
          method: "GET",
        }),
      }),

      editUserProfile: builder.mutation({
        query: (data: IUserInput) => ({
          url: EDIT_USER_PROFILE,
          method: "PATCH",
          data,
        }),
      }),
    }),
  });

export const {
  useLoginMutation,
  useRegisterMutation,
  useIsAuthQuery,
  useEditUserProfileMutation,
} = authCreateApi;
