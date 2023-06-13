import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

//fetchBaseQuery for fetching data
//reducerPath can be name anything for when you want to use it
//baseQuery is your query
//endPoints is all the querys you want to have
//

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCategories: builder.query({
      queryFn() {
        return { data: "categories" };
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoryApi;
