// your code here
const nameField = document.querySelector('#name')
const yearField = document.querySelector('#year')
const btn = document.querySelector('button');

const headingUrl = document.querySelector('#url');

btn.addEventListener('click', ()=>{
	const name = nameField.value.trim();
	const year = yearField.value;

	headingUrl.textContent = `https://localhost:8080/?name=${name}&year=${year}`
})