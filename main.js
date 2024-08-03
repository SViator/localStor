const addBtn = document.querySelector('#addBtn');
const nameImput = document.querySelector('#name');
const stateImput = document.querySelector('#state');
const submitBtn = document.querySelector('#submit');
const list = document.querySelector('#list');


submitBtn.addEventListener('click', submt);
render();

function submt(event) {
	event.preventDefault();
	let dataBase = new Array;

	if (localStorage.getItem("data")) {
		dataBase = JSON.parse(localStorage.getItem("data"));
	};

	dataBase.push(
		{
			name: `${nameImput.value}`,
			state: `${stateImput.value}`
		},
	);

	nameImput.value = '';
	stateImput.value = '';

	localStorage.setItem("data", JSON.stringify(dataBase));
	render();
}

function render() {
	list.innerHTML = '';
	let dataBase = JSON.parse(localStorage.getItem("data"));

	if (dataBase) {
		dataBase.forEach(element => {
			const newNote = document.createElement('div');
			newNote.className = 'new-note';
			newNote.innerHTML = `
				<p><b>Имя: </b>${element.name}</p>
				<p><b>Статус: </b>${element.state}</p>`;
			list.append(newNote);
		});
	}
}

