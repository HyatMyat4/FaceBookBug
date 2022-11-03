import React from 'react'
import { useGetUsersQuery } from '../../User/UserSlice'
import PostTIme from './PostTIme'

const PostHeader = ({userId , post }) => {
    const { user : username} =useGetUsersQuery('getUser',{
       selectFromResult: ({ data , isLoading}) => ({
        user : data?.entities[userId]
       }),
    })

    
    
  
  return (
    <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
        <div className='flex flex-row'>
            <div >
                <img className='rounded-full mr-[8px]'
                src='https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-1/52931327_3054565577902375_8419490726118686720_n.png?stp=cp0_dst-png_p40x40&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=SpAcCo732YMAX_4ZGpZ&_nc_ht=scontent-sin6-2.xx&oh=00_AT9z4cq0Q5xkjApZ1AxZAZ1hyV2bHoNQOPiyuwTK332bVg&oe=6370261F'
                />
            </div>
            <div className='flex flex-col'>
                <span>{username ? username.name : 'Unknown author'} </span>
                <span className='text-[13px] text-gray-400'><PostTIme timestamp={post.date}/></span>
            </div>
        </div>
        <div>
            <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
        </div>
    </div>
  )
}

export default PostHeader