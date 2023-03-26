const sendData = (url,data) => {
	return fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	}).then(response => response.json())
		.then(data => console.log(data))
		.catch(error => console.log(error))
}

getData = () => {
	const user = fetch('db.json')
	user
		.then(response => response.json())
		.then(data => sendData('https://jsonplaceholder.typicode.com/posts', data))
		.catch(error => console.log(error))
}

getData()
