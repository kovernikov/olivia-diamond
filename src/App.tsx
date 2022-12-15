import React from 'react';
import style from './App.module.css';
import Header from './header/Header';
import Gallery from './galleria/Gallery';
import Contact from './kontakt/Contact';
import Eshop from './eshop/Eshop';
import Footer from './footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import About from './about/About';

function App() {
	const styles = {
		flex: 1
	}
	return (

		<BrowserRouter >
			<Header/>
			<Routes >
				<Route path="about/*" element={<About/>} />
				<Route path="gallery/*" element={<Gallery/>} />
				<Route path="e-shop/*" element={<Eshop/>} />
				<Route path="contact/*" element={<Contact/>} />
			</Routes>
			<Footer/>
			{/*<div className={style.App}>*/}

			{/*	<div style={styles}>*/}

			{/*	</div>*/}

			{/*</div>*/}
		</BrowserRouter>


	);
}

export default App;
