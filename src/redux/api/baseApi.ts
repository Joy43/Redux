import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
    endpoints: (builder) => ({
        getTasks: builder.query<any, void>({
            query: () => "/tasks",
        }),
    }),
    createTask:buildCreateApi.mutation<any,{title:string}>({
        query:(taskData)=>({
            url:'/tasks',
            method:'POST',
            body:taskData
        }),
        invalidatesTags:['Task']
    })
})
export const{useGetTasksQuery}=baseApi;