if('serviceWorker' in navigator){
	navigator.serviceWorker.register('sw.js')
		.then(reg => console.log('service worker registered'))
		.catch(err => console.log('service worker not registered', err));
}

window.addEventListener('load', () => {
	u('.btn').on('click', () => console.log('clicked') );
});
