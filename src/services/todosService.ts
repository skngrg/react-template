import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Todo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  tagTypes: ['todo'],
  endpoints: (build) => ({
    getTodos: build.query<Todo[], void>({
      query: () => '/todos',
    }),
  }),
});
