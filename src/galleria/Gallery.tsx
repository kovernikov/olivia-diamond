import React from 'react';
import style from './Gallery.module.css';
import * as https from 'https';

function Gallery() {
	return (
			<div className={style.gallery}>
				<img src="https://assets.codepen.io/1506195/unsplash-1.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-7.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-3.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-2.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-6.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-0.jpg" alt=""/>
				<img src="https://assets.codepen.io/1506195/unsplash-8.jpg" alt=""/>
			</div>

	);
}

export default Gallery;