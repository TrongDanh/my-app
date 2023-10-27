import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieApi } from '../../redux/slices/phimSlice';
import { Button, message, Popconfirm } from 'antd';
import { quanLyPhimServ } from '../../services/quanLyPhim';



const TableMovie = () => {
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();
    const {arrPhim} = useSelector((state) => state.phimSlice);
    console.log(arrPhim);
    useEffect(() => {
        dispatch(getAllMovieApi());
    },[])

    const columns = [
        {
          title: 'Mã phim',
          dataIndex: 'maPhim',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Hình ảnh',
          dataIndex: 'hinhAnh',
          key: 'age',
          render: ( linkHinhAnh, record, index,) => {
            // text : Chuỗi
            // record: đại diện cho {}
            // index : đại diện vị trí bên trong mảng
            console.log(record);
            return <img className='w-32 object-cover h-32' src={linkHinhAnh} alt="" />
          }
        },
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            width: 400,
        },
        {
            title: 'Hành động',
            render: (text, record, index) => {
                return <div className='space-x-4'>
                    <Popconfirm
                        title="Bạn đang xóa phim"
                        description="Bạn có chắc muốn xóa phim này ?"
                        onConfirm={() => {
                            console.log('hello');
                            // lấy mã phim cần xóa
                            quanLyPhimServ.deleteMovie(record.maPhim)
                            .then((res) => {
                                console.log(res);
                                // gọi lại dữ liệu mới nhất từ server
                                // dispatch(getAllMovieApi());
                                // messageApi.success('Xóa thành công');
                            })
                            .catch ((err) => {
                                console.log(err);
                                // messageApi.error('Xóa không thành công');
                            })
                        }}
                        // onCancel={cancel}
                        okText="Đồng ý"
                        cancelText="Không">
                        <button className='text-white bg-red-500 py-1 px-3 rounded-md hover: bg-red-600 duration-300'>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </Popconfirm>
    
                    <button className='text-white bg-black py-1 px-3 rounded-md hover: bg-opacity-70 duration-300'>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </div>
            }
        },
      ];
      
  return (
    <div>
        {contextHolder}
        <Table columns={columns} dataSource={arrPhim} />;
    </div>
  )
}

export default TableMovie