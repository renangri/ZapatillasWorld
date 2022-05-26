import React from 'react';
import './Header.css';
import img from './Foot-Shop-logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='Header'>
			<Link to='/'>
				<div  className='banner' >
				<img className='logo' src={img} alt='Foot-shop'  />
				</div>
			</Link>
		</div>
	);
};

export default Header;
