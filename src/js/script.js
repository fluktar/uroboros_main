'use strict';
let barsMobile = document.querySelector('.bars_mobile');
let xMobile = document.querySelector('.x_mobile');
let ulDisplayNone = document.querySelector('.ul_display_none');
let navMobileItems = document.querySelectorAll('.nav-mobile-item');
let yearFooter = document.querySelector('.yearFooter');

const showNavMobile = () => {
	barsMobile.classList.add('bars_display_mobile_none');
	xMobile.classList.remove('x_display_mobile_none');
	xMobile.classList.add('bars_mobile');
	ulDisplayNone.classList.remove('ul_display_none');
	ulDisplayNone.classList.add('ul_display_mobile_show');
};
barsMobile.addEventListener('click', showNavMobile);

const hidenNavMobile = () => {
	barsMobile.classList.remove('bars_display_mobile_none');
	barsMobile.classList.add('bars_mobile');
	xMobile.classList.add('x_display_mobile_none');
	ulDisplayNone.classList.remove('ul_display_mobile_show');
	ulDisplayNone.classList.add('ul_display_none');
};
xMobile.addEventListener('click', hidenNavMobile);

const clickNavMobileItems = () => {
	navMobileItems.forEach(item => {
		item.addEventListener('click', hidenNavMobile);
	});
};
clickNavMobileItems();

let year = new Date().getFullYear();
yearFooter.innerHTML = year;

const cookies = () => {
	if (window.location.pathname !== '/index.html') return;

	if (localStorage.getItem('cookiesShown') === 'true') return;

	let body = document.body;

	let div = document.createElement('div');
	body.appendChild(div);
	div.classList.add('cookies');

	let cookiesDiv = document.querySelector('.cookies');
	cookiesDiv.innerHTML = `
  <p>Ciasteczka</p>
  <p class='pinokio'>Pragniemy poinformować, że na naszej stronie używamy plików cookies, dzięki którym możemy optymalizować działanie serwisu. Pliki zbierają informacje o Twoich preferencjach i odwiedzinach naszej strony. </p>
  <i class="fa-solid fa-x cookieX"></i>
  `;

	cookiesDiv.style = `position: fixed; bottom:0;  width:100%; height:100vh; background-color:rgba(0,0,0,0.8); display: flex; justify-content:center; align-items:center; flex-direction:column; color:white; z-index:1; scrollBehavior: smooth;`;

	let faX = document.querySelector('.cookieX');
	faX.style = ` cursor:pointer; font-size:3rem; margin:1rem`;

	faX.addEventListener('click', () => {
		cookiesDiv.style.display = 'none';
		body.style.overflow = 'auto';
		localStorage.setItem('cookiesShown', 'true');
	});

	body.style.overflow = 'hidden';

	let p = document.querySelectorAll('.cookies p');
	p.forEach(item => {
		item.style = `margin:1rem; font-size:1.5rem; border: 1px solid white; padding:1rem; border-radius:1rem; box-shadow: 0 2px 5px white;`;
	});
};

cookies();
let email = document.getElementById('email');
email.addEventListener('click', () => {
	if (email.value.includes('@') && email.value.includes('.')) {
		
	}
});
