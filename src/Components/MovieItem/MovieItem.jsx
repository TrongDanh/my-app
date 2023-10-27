import React from 'react'

const MovieItem = ({movie}) => {
    // console.log(movie);
    const {tenPhim, hinhAnh, moTa} = movie;
  return (
    <div>
        <img className='w-full h-96 object-cover' src={hinhAnh} alt="" />
        <h3 className='text-xl font-normal my-3 line-clamp-2 min-h-[56px]'>
            <span className='bg-orange-500 px-2 py-1 mr-3 text-white rounded'>C18</span>{tenPhim}
        </h3>
        <p className='line-clamp-2'>{moTa}</p>
    </div>
  )
}

export default MovieItem