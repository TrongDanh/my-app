import React from 'react'
import { useSelector } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem';
import { Carousel } from 'antd';
import './ListMovie.scss'
import useReponsive from '../../hook/useReponsive';

const ListMovie = () => {
    const {arrPhim} = useSelector((state) => state.phimSlice);
    const windowSize = useReponsive();
    console.log(windowSize)
    // console.log(arrPhim);
  return (
    <div className='container py-10'>
        <h1 className={`text-center font-bold text-2xl ${
            windowSize.widthWindow < 576 ? 'text-red-500' : ''
        }`}>Danh sách các Phim</h1>
        <Carousel rows={2} slidesToShow={5} dots={true} className='carousel_movie' >
            {arrPhim.map((item,index) => {
                return <div className="p-5">  
                    <MovieItem movie={item}/>
                </div> 
            })}
        </Carousel> 
        {/* <div className="grid grid-cols-4 gap-5 mt-5"> */}
            
        {/* </div> */}
    </div>
  )
}

export default ListMovie