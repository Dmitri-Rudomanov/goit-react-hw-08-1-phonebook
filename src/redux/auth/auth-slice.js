import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Users'],
  endpoints: builder => ({
    addUser: builder.mutation({
      query: userState => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          user: userState.user,
          token: userState.token,
          isLoggedIn: userState.isLoggedIn,
          isFetchingCurrentUser: userState.isFetchingCurrentUser,
        },
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const { useAddUserMutation } = userApi;
