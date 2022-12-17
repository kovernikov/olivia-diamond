import React from 'react';
import style from './Header.module.css';
import Nav from '../nav/Nav';

function Header() {
	return (
		<div className={style.header} >
			<div className={style.box}>
				<div className={style.display}>Olivia Diamond</div>
			</div>
			<Nav/>

		</div>
	);
}

export default Header;