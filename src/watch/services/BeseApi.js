import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const api_key = '69a65b17b82a689fb8dfbe96fb1ccde0';  
export const BaseApi = createApi ({
    reducerPath: 'IMDBApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
     
    }),
    endpoints: (builder) => ({
      getPopularMovies : builder.query({ query: ({pageId}) => `/movie/popular?api_key=${api_key}&language=en-US&page=${pageId}`})  
    }),
});

export const {
    useGetPopularMoviesQuery,
} = BaseApi;



