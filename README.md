# URL Shortener Microservice

This project is my solution for [APIs and Microservices Projects - URL Shortener Microservice] and it's a part of APIs and Microservices Certification by [freeCodeCamp].

## Requirements

✅ Sprovide your own project, not the example URL.

✅ You can POST a URL to `/api/shorturl` and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://freeCodeCamp.org', short_url : 1}

✅ When you visit `/api/shorturl/<short_url>`, you will be redirected to the original URL.

✅ If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }
## Installation

### Install dependencies
```bash
$ npm i
```
### Start the server
```bash
$ npm start
```

[APIs and Microservices Projects - URL Shortener Microservice]: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice
[freeCodeCamp]: https://www.freecodecamp.org/




