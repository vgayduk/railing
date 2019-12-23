let gallery = document.querySelector('.gallery');
let galleryItems = ['img/main-banner.jpg', 'img/about-bg.jpg', 'img/serv-item1.jpg', 'img/photo1.jpg', 'img/photo2.jpg', 'img/photo3.jpg', 'img/photo4.jpg', 'img/photo5.jpg', 'img/photo6.jpg', 'img/photo7.jpg', 'img/photo8.jpg', 'img/photo9.jpg', 'img/photo10.jpg', 'img/photo11.jpg', 'img/photo12.jpg'];

setInterval(function() {
	let randomImage = Math.floor(Math.random() * galleryItems.length);
	let randomContainer = Math.floor(Math.random() * gallery.children.length);

	gallery.children[randomContainer].style.opacity = 0;
	setTimeout(function(){
		gallery.children[randomContainer].src = galleryItems[randomImage];
		gallery.children[randomContainer].style.opacity = 1;
	}, 500);
} ,3000);

let pageLinks = document.querySelectorAll('a[href*="#"]');

for (let i = 0; i < pageLinks.length; i++) {
	pageLinks[i].addEventListener('click', function(event) {
		event.preventDefault();
		let anchorId = pageLinks[i].getAttribute('href');
		document.querySelector(anchorId).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}