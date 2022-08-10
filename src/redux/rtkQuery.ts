import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Album } from "./photoReducer";

export const photoRTKAPI = createApi({
  reducerPath: "photoRTKAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (builder) => ({
    fetchPhotoList: builder.query<[Album], void>({
      query: () => "photos"
    })
  })
})

export const { useFetchPhotoListQuery } = photoRTKAPI;
