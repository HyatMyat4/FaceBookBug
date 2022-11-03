import React from 'react'
import PostHeader from './PostHeader'
import PostTextPara from './PostTextPara'
import Postimg from './Postimg'
import ReactionBar from './ReactionBar'
import ReactionCommect from './ReactionCommect'
import CommectRight from './CommectRight'
import { useGetPostQuery } from '../PostSlice';

import { useGetCommectByUserIdQuery } from '../../commect/CommectSlice'
const PostContainer = ({ postId }) => {  
  const { post } = useGetPostQuery('getPost',{
    selectFromResult: ({ data }) => ({
      post: data?.entities[postId]
    })
  })



const {
  data: Comments,
  isLoading,
  isSuccess,
  isError,
  error
} = useGetCommectByUserIdQuery(postId);

  return (
    <div key={postId} className='w-[100%] h-[auto] mt-[20px] bg-[#262727] rounded overflow-hidden pb-[8px] animate-slideup'>
        <PostHeader userId={post.userId} post={post} />
        <PostTextPara post={post}/>
        <Postimg />
        <ReactionBar Comments={Comments}/>
        <ReactionCommect/>
        <CommectRight 
        
        Comments={Comments}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={ error} />
    </div>
  )
}

export default PostContainer