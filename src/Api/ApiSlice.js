import { createApi , fetchBaseQuery   } from '@reduxjs/toolkit/query/react';

export const ApiSlice  = createApi({
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl : 'https://jsonplaceholder.typicode.com' }),
        tagTypes: ['posts' , 'User' , 'Comment' , 'Photo' ],
        endpoints: builder => ({})

})
