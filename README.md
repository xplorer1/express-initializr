[![NodeJs Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/591px-Node.js_logo_2015.svg.png)](https://nodejs.org/en/) 

## Installation

```sh
$ npm install -g node-initializr
```

## Quick Start

node-initializr will generate boilerplate code for popular NodeJs frameworks. At this moment, it supports express and react. Support for other frameworks will come with later versions.
It tries to be opinionated in the way it defines the folder structure and code organisation.

Defaults:

#Framework: `express`
#Name: `hello_world`

Create the app.

```bash
$ node-init
```

This will generate an express app named `hello_world` in the current working directory and install the dependencies required to get your application started.

Create an express app with given name:

```bash
$ node-init food-app
```

Create an express app with the given name and space delimited list of dependencies.

```bash
$ node-init food-app -d morgan dotenv noty
```

Create an app with a different framework.

```bash
$ node-init food-app -f react
```

Start your Express.js app and visit it at: `http://localhost:8000`:

```bash
$ npm start
```

## License

[MIT](LICENSE)

[npm-url]: https://www.npmjs.com/package/node-initializr
[downloads-url]: https://www.npmjs.com/package/node-initializr