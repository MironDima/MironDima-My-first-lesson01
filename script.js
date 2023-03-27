const request = new XMLHttpRequest()
let user = JSON.stringify({
	name: 'Dima',
	sername: 'Miron'
})
request.open('POST', 'https://jsonplaceholder.typicode.com/posts ')
request.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
request.send(user)
request.addEventListener('load', () => {
	if (request.status === 201) {
		const data = JSON.parse(request.response)
		console.log(data);
		console.log('Успех');
	} else {
		console.log('Не успех');
	}
})
