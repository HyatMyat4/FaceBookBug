import React from 'react'

const WatchPostFooter = ({MovieView , comment , reaction}) => {
  return (
    <div className='w-full h-[50px] flex flex-row  items-center justify-between bg-[#242526] '>
        <div className='w-[450px] h-[40px] flex flex-row items-center '>
            <div className='w-[15%] h-[34px] flex flex-row items-center  justify-center rounded hover:bg-[#3A3B3C] ml-[15px] cursor-pointer  '>
                <i class="fa-regular fa-thumbs-up text-[20px] text-gray-100 mr-[5px]"></i>
                <span className='text-[14px]'>Like</span>
            </div>
            <div className='w-[25%] h-[34px] flex flex-row items-center  justify-center rounded hover:bg-[#3A3B3C] cursor-pointer '>
                <i class="fa-regular fa-comment text-[20px] text-gray-100 mr-[5px]"></i>
                <span className='text-[14px]'>Comment</span>
            </div>
            <div className='w-[25%] h-[34px] flex flex-row items-center  justify-center rounded hover:bg-[#3A3B3C] cursor-pointer '>
                <i class="fa-solid fa-share text-[18px] text-gray-100  mr-[5px] "></i>
                <span className='text-[14px]'>Share</span>
            </div>
            
        </div>
        <div>
            <span className='mr-[10px] text-[13px] hover:underline cursor-pointer '>
               <i class="fa-solid fa-thumbs-up p-[5px] bg-[#0376f2]  text-[11px] rounded-full translate-x-[] "></i>
               <i class="fa-solid fa-heart p-[5px]  bg-[#EC2B4B]  rounded-full text-[11px] translate-x-[-2px]"></i>
               <i class="fa-solid fa-face-laugh-squint text-[#F9B63C]  rounded-full text-[19px] translate-x-[-4px] translate-y-[+3px]"></i>
               {reaction}M <span>others</span>
            </span>
            <span className='text-[13px] hover:underline mr-[5px] cursor-pointer'>{comment} comments . </span>
            <span className='text-[13px] mr-[10px] cursor-pointer'>{Math.floor(MovieView)}K views</span>
        </div>
    </div>
  )
}

export default WatchPostFooter