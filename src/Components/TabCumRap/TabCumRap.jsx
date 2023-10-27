import React, { useEffect, useState } from 'react'
import {Tabs} from 'antd'
import { quanLyRapServ } from '../../services/quanLyRap'
import './TabCumRap.scss'
import moment from 'moment'

export const TabCumRap = ({maHeThongRap}) => {
    const [cumRap, setCumRap] = useState([]);
    useEffect(() => {
        quanLyRapServ.getLayThongTinLichChieu(maHeThongRap).then((res) => {
            console.log(res);
            
            // lấy danh sách các cụm rạp của 1 hệ thống rạp và lưu vào state
            setCumRap(res.data.content[0].lstCumRap)
        }).catch((err) => {
            console.log(err)
        })
    },[])
  return (
    <div>
        <Tabs
            tabPosition={'left'}
            // items={new Array(3).fill(null).map((_, i) => {
            // const id = String(i + 1);
            // return {
            //     label: `Tab ${id}`,
            //     key: id,
            //     children: `Content of Tab ${id}`,
            // };
            // })}
            tabBarStyle={{ maxWidth: '300px', maxHeight: '650px', overflowY: 'scroll'}}
            className='tab_cum_rap'
            items={cumRap.map((item, index) => {
                console.log(item);
                return {
                    label: (
                        <div className='text-left w-full'>
                            <h3 className='text-green-500 truncate max-w-[200px]'>{item.tenCumRap}</h3>
                            <p className='text-gray-500 truncate max-w-[200px]'>{item.diaChi}</p>
                        </div>
                    ),
                    key: index,
                    children: <div className='space-y-5 px-10' style={{maxHeight: '650px', overflow: 'scroll'}}>
                        {item.danhSachPhim.map((lichChieu, index) => {
                             return <div className='grid grid-cols-12 gap-4' key={index}>
                                <div className='col-span-2'>
                                    <img className='h-32 w-full object-cover' src={lichChieu.hinhAnh} alt="" />
                                </div>
                                <div className="col-span-9">
                                    <h4 className='font-bold'>{lichChieu.tenPhim}</h4>
                                    <div className='grid grid-cols-2 gap-3'>
                                        {lichChieu.lstLichChieuTheoPhim.splice(0, 4).map((item,index) => {
                                            return <div key={index} className='py-2 px-3 border border-gray-300 space-x-2'>
                                                <span className='text-green-600 font-bold'>
                                                    {moment(item.ngayChieuGioChieu).format('DD-MM-YYYY')}
                                                </span>
                                                <span className='text-orange-500 font-bold'>
                                                    {'  '}
                                                    {moment(item.ngayChieuGioChieu).format('hh:mm')}
                                                </span>
                                                
                                            </div>
                                        })}
                                    </div>
                                </div>
                             </div>
                        })}
                    </div>,
                }
            })}
        />
    </div>
  )
}

export default TabCumRap