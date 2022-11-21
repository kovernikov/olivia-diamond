import React from 'react';
import style from './Nav.module.css';

function Nav() {
	return (
		<div className={style.nav}>
			<a href="">O nás</a>
			<a href="">Galleria</a>
			<a href="">E-shop</a>
			<a href="">Kontakty</a>
		</div>
	);
}

export default Nav;