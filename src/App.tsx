import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import Header from './header/Header';
import Gallery from './galleria/Gallery';
import Contact from './kontakt/Contact';
import Eshop from './eshop/Eshop';
import Footer from './footer/Footer';

function App() {
	const styles = {
		flex: 1
	}
	return (
		<div className={style.App}>
			<Header/>
			<div style={styles}>
				<Gallery/>
				<Eshop/>
				<Contact/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
