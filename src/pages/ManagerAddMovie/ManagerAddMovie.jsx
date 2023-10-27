import React from 'react'
import FormAddMovie from '../../Components/FormAddMovie/FormAddMovie'

const ManagerAddMovie = () => {
  return (
    <div className='p-10 bg-white rounded-lg'>
        <h2 className='text-2xl mb-5 font-bold'>Thêm phim</h2>
        <FormAddMovie/>
    </div>
  )
}

export default ManagerAddMovie