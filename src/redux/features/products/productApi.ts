import { api } from "@/redux/api/apiSlice";

const productApi=api.injectEndpoints({
    endpoints: (builder) => ({
        // ******Get-Product***********
        getProducts: builder.query({
          query: () => '/products',
        }),
        // ******Get-Single-Product***********
        singleProduct: builder.query({
          query: (id) => `/product/${id}`,
        }),
        // ******Post-Comment***********
        postComment:builder.mutation({
          query:({id,data})=>({
            url:`/comment/${id}`,
            method:"POST",
            body:data
          }),
          invalidatesTags:['comments']
        }),
        // ******Get-Comment***********
        getComment: builder.query({
          query: (id) => `/comment/${id}`,
          providesTags:['comments']
        }),
      }),
});

export const { useGetProductsQuery, useSingleProductQuery,usePostCommentMutation, useGetCommentQuery }=productApi;