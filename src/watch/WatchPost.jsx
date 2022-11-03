import React from 'react'
import WatchPostFooter from './WatchPostFooter'
import { useGetPopularMoviesQuery } from './services/BeseApi'

import { AddMovie } from './services/TotalMovieSlice'
import { useDispatch , useSelector } from 'react-redux'
import { parseISO , formatDistanceToNow } from 'date-fns'
import { TotalMovieC } from './services/TotalMovieSlice'
let WatchPost = () => {
    const TotalMovie = useSelector(TotalMovieC)
    const pageId = '3'
    const dispatch = useDispatch()
    const Api_originimg = 'https://image.tmdb.org/t/p/original/' 
    const { 
        data: Movie, 
        isLoading,
        isSuccess,
        isError,
        error } = useGetPopularMoviesQuery({pageId});

       


console.log(Movie?.results , 'is data')






           
console.log('it Total')
let contend ;
if(isLoading && isLoading ){
    contend = <div className='w-full h-full flex flex-row items-center justify-center animate-spin'>
        <i class="fa-regular fa-snowflake text-[80px] text-cyan-200"></i>
    </div>
    console.log('is loading yaaaa Oppppppppppppppppppppppppp')
}else if (isSuccess && isSuccess ) {
   
    dispatch(AddMovie(  Movie?.results  ))
  
    
    console.log(TotalMovie ,'++++++++++++++++++')
    let date
    let timePeriod
    let TimeP = Movie?.results.map(date => (
         date = parseISO(date.release_date),
         timePeriod = formatDistanceToNow(date),
        console.log(timePeriod , 'it timePeriod')  
        ))
  
       
contend = Movie?.results.map((MovAll) => (
    
    <div key={MovAll.id} className='w-[900px] h-auto  m-auto mt-[20px]  rounded-[7px] overflow-hidden '>
    <div className='bg-[#242526] w-[900px] h-auto    '>
        <div className='w-[96%] h-[60px]  flex flex-row items-center justify-between m-auto ]'>
    <div className='flex flex-row'>
        <div >
            <img className='rounded-full mr-[8px] w-[40px] h-auto'
            src='https://i.pinimg.com/originals/4e/b3/59/4eb359766faf2364a099b03879b4d181.jpg'
            />
        </div>
        <div className='flex flex-col'>
            <span>Replubic of Movie  </span>
            <span className='text-[13px] text-gray-400'>{timePeriod}<i class="fa-solid fa-earth-asia ml-[5px]"></i></span>
        </div>
    </div>
    <div>
        <i className="fa-solid fa-ellipsis text-[19px] cursor-pointer text-gray-200 py-[5px] px-[6px]  rounded-full hover:bg-[#6b6b6ba0]"></i>
    </div>
</div>
<div className='w-[96%] h-auto b m-auto pb-[10px] text-sky-400 '>
{MovAll.overview}
<span className='text-emerald-400'>{`[${MovAll.title}]`}</span>
</div>
</div>
   <div className='w-[100%] h-auto m-auto bg-[#242526] m-auto'>
       <img className='w-auto h-auto m-auto' src={Api_originimg + MovAll.backdrop_path} />
   </div>
   <WatchPostFooter MovieView={MovAll.popularity} comment={MovAll.vote_count} reaction={MovAll.vote_average}/>
</div>
)
)

}else if(isError && isError ) {
contend = <div>{error} Please Reload🤧</div>
}


  return (
    <>
       {contend}
       <div className='flex flex-row items-center justify-center'>
       <button className='w-[200px] h-[40px] bg-rose-600 mt-[30px] mb-[50px]'>Load More</button>
       </div>
    </>   
   
  )
}
WatchPost = React.memo(WatchPost)

export default WatchPost