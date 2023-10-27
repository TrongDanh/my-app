import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';
import { string } from 'yup';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const AdminTemplate = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    // useEffect(() => {
    //   // gọi dữ liệu từ localStore và kiểm tra
    //   const dataUser = JSON.parse(localStorage.getItem('userLogin'));
    //   if (dataUser) {
    //     if (dataUser.maLoaiNguoiDung != 'QuanTri') {
    //       window.location.href = 'https://google.com';
    //     } else {
    //       window.location.href = 'https://google.com';
    //     }
    //   }
    // },[])

    let [selectKey, setSelectKey] = useState([]);
      useEffect(() => {
        // kiểm tra nếu pathname không có chứa từ khóa bên trong mảng selectKey thì sẽ cho mảng select giá trị rỗng
        if ( ! location.pathname.includes(selectKey[0])) {
            setSelectKey([]);
        }
      },[location.pathname])
      console.log(selectKey);

  return (
    <Layout className='min-h-screen'>
      <Sider 
      className='py-5'
        theme='light'
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Link to={'/admin'}>
            <img src="./image/logo.png" className='w-32 mx-auto mb-5' alt="" />
        </Link>
        <Menu
          theme="light"
          mode="inline" 
          onSelect={({item, key, selectedKeys}) => {
            console.log(item);
            console.log(key);
            console.log(selectedKeys)

            // xử lí chuyển hướng người dùng thông qua key
            setSelectKey([key]);
            navigate(key);
            
          }}
          selectedKeys={selectKey}
        //   items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
        //     (icon, index) => ({
        //       key: String(index + 1),
        //       icon: React.createElement(icon),
        //       label: `nav ${index + 1}`,
        //     }),
        //   )}
            items={[ 
                {
                    icon: <i className="fa-solid fa-user-tie"></i>,
                    title: 'Quản lý User', 
                    key: 'manager-user',
                },
                {
                    icon: <i className="fa-solid fa-user-tie"></i>,
                    title: 'Quản lý phim',  
                    key: 'manager-movie',
                },
                {
                    icon: <i className="fa-solid fa-user-tie"></i>,
                    title: 'Tạo phim',
                    key: 'create-movie',
                },
                {
                    icon: <i className="fa-solid fa-user-tie"></i>,
                    title: 'Tạo lịch chiếu', 
                    key: 'create-showtime',
                },

            ].map((item, index) => {
                return {
                    key: item.key,
                    icon: item.icon,
                    label: item.title,
                }
            })}
        />
      </Sider>
      <Layout>
        <Header
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div>
            <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};


export default AdminTemplate