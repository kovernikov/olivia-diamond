import React from 'react';
import style from './Nav.module.css';

function Nav() {
	return (
		<div className={style.nav}>
			<a href="">O nás</a>
			<a href="">Zlato</a>
			<a href="">Kontakt</a>
		</div>
	);
}

export default Nav;