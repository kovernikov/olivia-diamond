import React from 'react';
import logo from './logo.svg';
import style from './App.module.css';
import Header from './header/Header';
import Gallery from './galleria/Gallery';
import Contact from './kontakt/Contact';
import Eshop from './eshop/Eshop';
import Footer from './footer/Footer';

function App() {
	return (
		<div className={style.App}>
			<Header/>
			<Gallery/>
			<Eshop/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;
