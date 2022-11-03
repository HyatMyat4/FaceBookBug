import React from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { ChangeColourengin } from '../HomeMain/PostContainer/ActionSlice'
import { ChangeColourC } from '../HomeMain/PostContainer/ActionSlice'
const LeftWatch = () => {
    const dispatch = useDispatch()

    const ChangeName = useSelector(ChangeColourC)

    
  return (
    <div className='w-[360px] h-screen  border-r-[1px] bg-[#242526] border-[#54545477]'>
        <div className=' w-[92%] h-[60px] m-auto flex flex-row items-center justify-between '>
            <h1 className='font-bold text-[22px]'>Watch</h1>
            <span><i className="fa-solid fa-gear p-[8px] bg-[#64626255] text-[20px] rounded-full"></i></span>
        </div>
        <div className='w-[92%] h-[38px] m-auto bg-[#3A3B3C] flex flex-row items-center rounded-full'>
            <i className="fa-solid fa-magnifying-glass ml-[15px] mr-[4px] text-[15px]"></i>
            <input
            type={'text'}
            placeholder='Search videos'
            className='text-[15px] w-[97%] h-[100%] rounded-full bg-transparent outline-none pl-[5px]'
            />
        </div>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center mt-[15px] rounded-[8px]  hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 1 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bgblue' onClick={()=>dispatch(ChangeColourengin(1))}>
            <span className={` text-[23px] px-[6px] py-[2px]  rounded-full m-[10px] ${ChangeName === 1 ? 'bg-[#1877F2]' : 'bg-[#4E4F50]' } `} id='blue'><i className="fa-brands fa-youtube "></i></span>
            <span>Home</span>
        </div>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 2 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bgred'   onClick={()=>dispatch(ChangeColourengin(2))} >
            <span className={`text-[20px] px-[6px] py-[2px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 2 ? 'bg-rose-600' : 'bg-[#4E4F50]' }`} id='red'><i className="fa-solid fa-video"></i></span>
            <span>Live</span>
        </div>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 3 ? 'bg-[#3A3B3C]' : 'bg-transprent' } `} id='bggreen' onClick={()=>dispatch(ChangeColourengin(3))}>
            <span className={`text-[21px] px-[8px] py-[2px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 3 ? 'bg-[#2ABBA7]' : 'bg-[#4E4F50]' }`} id='green'><i className="fa-solid fa-clapperboard"></i></span>
            <span>Shows</span>
        </div>
        <div className={`w-[96%] h-[50px] m-auto  flex flex-row items-center  rounded-[8px] hover:bg-[#3A3B3C] cursor-pointer ${ChangeName === 4 ? 'bg-[#3A3B3C]' : 'bg-transprent' }`} id='bgyellow' onClick={()=>dispatch(ChangeColourengin(4))}>
            <span className={` text-[21px] py-[1px] px-[9px] bg-[#4E4F50] rounded-full m-[10px] ${ChangeName === 4 ? 'bg-[#F7B928]' : 'bg-[#4E4F50]' } `} id='yellow'><i className="fa-solid fa-bookmark"></i></span>
            <span>Saved videos</span>
        </div>
    </div>
  )
}

export default LeftWatch