import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "345900ee59msh7c0deba68a260cap1ba235jsna38becc7594c"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/charts/track",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;