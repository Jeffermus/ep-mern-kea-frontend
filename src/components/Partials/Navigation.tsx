
import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, LoginOutlined, ContactsOutlined } from '@ant-design/icons';
import "../../Styles/Button.css"

const styling = {
  paddingTop: "5px"
}

const Navigation = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']} theme="dark">
    <Menu.Item key="icon" className="modified-item" style={{width:"10%"}} icon={<img alt="logo"  src="/logo.png"style={{width:"40%"}}/>}>
    {/* <img  src="/logo.png"style={{width:"10%"}}/> */}
    </Menu.Item>
    <Menu.Item key="mail" icon={<MailOutlined />} style={styling}>
      Forside
    </Menu.Item>
    <Menu.Item key="Kontakt" icon={<LoginOutlined />} style={styling}>
      Kontakt
    </Menu.Item>
    <Menu.Item key="Login" style={{marginLeft:"auto", marginRight:"7%", paddingTop:"5px"}} icon={<ContactsOutlined />}>
        Login
    </Menu.Item>
  </Menu>
);

export default Navigation;