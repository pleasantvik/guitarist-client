import { configuredApi } from ".";
import { BySold_URL, UPLOAD_IMG_URL } from "./constants/product-url";

export const productCreateApi = configuredApi
  .enhanceEndpoints({
    addTagTypes: [],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      bySold: builder.query({
        query: (queryParams) => ({
          url: `${BySold_URL}${queryParams}`,
          method: "GET",
        }),
      }),

      uploadImg: builder.mutation({
        query: (data: any) => ({
          url: UPLOAD_IMG_URL,
          method: "POST",
          data,
        }),
      }),
    }),
  });

export const { useBySoldQuery, useUploadImgMutation } = productCreateApi;
