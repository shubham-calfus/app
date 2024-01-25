import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => `posts`,
        }),

    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postApi