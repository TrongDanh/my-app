import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'  
import { DatePicker, Switch, Rate } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhim';

const FormAddMovie = () => {
    const formik = useFormik({
        initialValues: {
            tenPhim: '',
            trailer:'',
            moTa: '',
            ngayChieu: '',
            dangChieu: false,
            sapChieu: false,
            hot: false,
            danhGia: false,
            hinhAnh: '',
        },
        onSubmit: (values) => {
            console.log(values);
            let formData = new FormData();
            for (let key in values) {
                if (key == 'hinhAnh') {
                    formData.append('File', values[key])
                } else {
                    formData.append(key, values[key]);
                } 
            }
            // console.log(formData);
            quanLyPhimServ.themPhim(formData).then((res) => {
                console.log(res);
            }).catch ((err) => {
                console.log(err);
            })
        },
        validationSchema: Yup.object({
            tenPhim: Yup.string().required('Vui lòng không bỏ trống')
        })
    })

    const {values, handleBlur, handleSubmit, handleChange, touched, errors, setFieldValue} = formik;
    
  return (
    <div>
        <form onSubmit={handleSubmit} className='space-y-5 form_add_movie'>
            <div>
                <label for="tenPhim" class="block mb-2 text-sm font-medium text-gray-900">Tên Phim</label>
                <input type="text" id="tenPhim" name='tenPhim' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nhập tên phim" onChange={handleChange} onBlur={handleBlur} value={values.tenPhim} />
                {errors.tenPhim && touched.tenPhim && (
                    <p className='text-red-500 mt-1 text-sm'>{errors.tenPhim}</p>
                )}
            </div>
            <div>
                <label for="trailer" class="block mb-2 text-sm font-medium text-gray-900">Trailer</label>
                <input type="text" id="trailer" name='trailer' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nhập trailer" onChange={handleChange} onBlur={handleBlur} value={values.trailer} />
            </div>
            <div>
                <label for="moTa" class="block mb-2 text-sm font-medium text-gray-900">Mô tả</label>
                <input type="text" id="moTa" name='moTa' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Nhập mô tả" onChange={handleChange} onBlur={handleBlur} value={values.moTa} />
            </div>
            <div>
                <label for="ngayChieu" class="block mb-2 text-sm font-medium text-gray-900">Ngày Chiếu</label>
                <DatePicker id='ngayChieu' 
                    onChange={(date, dateString) => {
                        // console.log(date);   
                        console.log(dateString);
                        setFieldValue('ngayChieu',dateString)
                    }} 
                    format={'DD-MM-YYYY'} 
                />
            </div>
            <div>
                <label for="dangChieu" class="block mb-2 text-sm font-medium text-gray-900">Đang chiếu</label>
                < Switch id='dangChieu' onChange={ (checked) => {
                    setFieldValue( 'dangChieu', checked)
                }} checked={values.dangChieu} />
            </div>
            <div>
                <label for="sapChieu" class="block mb-2 text-sm font-medium text-gray-900">Sắp Chiếu</label>
                < Switch id='sapChieu' onChange={ (checked) => {
                    setFieldValue( 'sapChieu', checked)
                }}  checked={values.sapChieu} />
            </div>
            <div>
                <label for="hot" class="block mb-2 text-sm font-medium text-gray-900">HOT</label>
                < Switch id='hot' onChange={ (checked) => {
                    setFieldValue( 'hot', checked)
                }} checked={values.hot} />
            </div>
            <div>
                <label for="danhGia" class="block mb-2 text-sm font-medium text-gray-900">Số sao</label>
                < Rate id='danhGia' onChange={ (number) => {
                    setFieldValue( 'danhGia', number)
                }} value={values.danhGia} />
            </div>
            <div>
                <label for="hinhAnh" class="block mb-2 text-sm font-medium text-gray-900">Số sao</label>
                <input type='file' name='hinhAnh' onChange={ (event) => {
                    console.log(event.target.files);
                    setFieldValue('hinhAnh', event.target.files[0])
                }} onBlur={handleBlur}/>
            </div>
            <div>
                <button type='submit' className='py-2 px-5 bg-blue-500 text-white rounded-md'> Thêm Phim</button>
            </div>
        </form>
    </div>
  )
}

export default FormAddMovie