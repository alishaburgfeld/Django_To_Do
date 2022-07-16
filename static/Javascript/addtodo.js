function addToDo(event) {
	event.preventDefault();
	console.log("IN JS");
	let new_task = {};

	for (let i = 0; i < event.target.length; i++) {
		let name = event.target[i].name;
		let value = event.target[i].value;

		new_task[name] = value;
	}
	console.log(new_task);
	event.target.reset();
	axios
		.post("/addtask/", new_task)
		.then(function (response) {
			console.log(response.data.data);
			// task = response.data.data;

			// let list = document.getElementById("to-do-list");
			// let = document.createElement("li");
			// li.innerHTML = `
			// <span>${task.category}</span>
			// <span>${task.title}</span>
			// <span>${task.priority}</span>`;
			// // console.log(li)
			// list.appendChild(li);
			window.location.href = "/todos/"; //can be used to refresh page
		})
		.catch((response) => {
			console.log("something went wrong");
		});
}
