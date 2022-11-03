import { createEntityAdapter  } from "@reduxjs/toolkit";
import { ApiSlice } from "../Api/ApiSlice";
import { sub } from "date-fns"
const postsAdapter = createEntityAdapter({
    sortComparer: (a , b) => b.date.localeCompare(a.date)
})

const initialState = postsAdapter.getInitialState();

export const extendedApiSlice = ApiSlice.injectEndpoints({
   endpoints: builder => ({
        getPost: builder.query({
            query: () => '/posts',
             transformResponse: responseData => {
                let min = 1;
              const loadedPosts =   responseData.map(post => {
                if(!post.date) post.date = sub(new Date(), { minutes: min++ }).toISOString();
                if(!post.reaction) post.reaction =  {
                    Totalreaction:0,
                }
                return post ;
              });
              return postsAdapter.setAll(initialState , loadedPosts)
            },
            providesTags: (result , error , arg) => [
                {type : 'posts' , id: 'LIST' },    
                ...result.ids.map(id => ({ type : 'posts' , id}))            
            ]
        }),
        addNewPost: builder.mutation({
          query: initialPost => ({
              url: '/posts',
              method: 'POST',
              body: {
                  ...initialPost,    
                  userId: Number(initialPost.userId),             
                  date: new Date().toISOString(),
                  reactions: {
                    Totalreaction:0,
                  }
              }
          }),
          invalidatesTags: [
              { type: 'Post', id: "LIST" }
          ]
      }),
    }),
});

export const { 
  useGetPostQuery ,
  useAddNewPostMutation,
 
} = extendedApiSlice

