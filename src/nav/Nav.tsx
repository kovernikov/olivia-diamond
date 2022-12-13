import React from 'react';
import style from './Nav.module.css';
import {NavLink} from 'react-router-dom';

function Nav() {
	return (
		<div className={style.nav}>
			<NavLink to="/oNas" > O nás </NavLink>
			{/*<a href="">O nás</a>*/}
			<NavLink to="/galleria" > Galleria </NavLink>
			<NavLink to="/e-shop" > E-shop </NavLink>
			{/*<a href="">E-shop</a>*/}
			{/*<a href="">Kontakty</a>*/}
			<NavLink to="/contact" > Kontakty </NavLink>
		</div>
	);
}

export default Nav;