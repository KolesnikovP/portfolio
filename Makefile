build: 
	docker build -t portfolio .

run: 
	docker run -d -p 3000:3000 --name portfolio --rm portfolio
