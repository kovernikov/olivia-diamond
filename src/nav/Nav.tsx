import React from 'react';
import style from './Nav.module.css';
import { NavLink} from 'react-router-dom';



export type NavTypeProps = {
	// appState: StateType
	// activeClassName?: string | undefined;
}

const Nav: React.FC<NavTypeProps > = (props) => {
	return (
		<div className={style.nav}>
			<div className={style.item}>
				<NavLink to="/o-nas"    className={({ isActive }) =>
					isActive ? style.activelink : undefined
				}> O nás </NavLink>
			</div>
			{/*<a href="">O nás</a>*/}
			<div className={style.item}>
				<NavLink to="/galleria" className={({ isActive }) =>
					isActive ? style.activelink : undefined
				}> Galleria </NavLink>
			</div>
			<div className={style.item}>
				<NavLink to="/e-shop" className={({ isActive }) =>
					isActive ? style.activelink : undefined
				}> E-shop </NavLink>
			</div>
			{/*<a href="">E-shop</a>*/}
			{/*<a href="">Kontakty</a>*/}
			<div className={style.item}>
				<NavLink to="/contact" className={({ isActive }) =>
					isActive ? style.activelink : undefined
				}> Kontakty </NavLink>
			</div>
		</div>
	);
}

export default Nav;