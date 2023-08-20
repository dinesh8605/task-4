
const myDiv = document.getElementById("myDiv");


let htmlstring = "";
async function getusers() {
	let response = fetch("https://jsonplaceholder.typicode.com/users");
	let data = (await response).json();
	return data;
}


getusers().then((data) => {
console.log(data);
	data.forEach((element) => {
		htmlstring += `<div class="card">
	<div class="name">Name: ${element.name}</div>
	<div>Email: ${element.email}</div>
	<div>Street: ${element.name}</div>
	<div>City: ${element.name}</div>
	</div>`
	});
	myDiv.innerHTML = htmlstring;
})	
