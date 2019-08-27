import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import './Header.css'

const menu = (
	<Menu>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
				查看本人所有博客
      </a>
		</Menu.Item>
		<Menu.Item>
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
				注销
      </a>
		</Menu.Item>
	</Menu>
);


function Header() {
	return (
		<div className="header">
			<h1>Blog</h1>
			<Dropdown overlay={menu}>
				<a className="ant-dropdown-link" href="#">
					用户名 <Icon type="down" />
				</a>
			</Dropdown>
		</div>
	);
}

export default Header;
