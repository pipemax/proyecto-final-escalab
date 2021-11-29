# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Configure Project

In the project directory, run 

### `npm install` 

Install all the dependencies of the project in your local machine, this might take a while

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Explicación

El proyecto utiliza la API de IMDB para visualizar películas y series (https://imdb-api.com/). El usuario puede buscar y ver el detalle de una serie o película utilizando
las opciones que ofrece el sistema. Al iniciar sesión (cuenta falsa), el usuario podrá guardar en "favoritos" las películas o series que le interesen, las cuales se almacenarán en el almacén local del navegador.

Se utilizaron custom hooks para cargar los datos de la API, los cuales se encuentran en la carpeta "custom-hooks"
Se utilizó Redux para manejar los estados del Login y Favoritos. Investigando un poco, encontré redux-toolkit, lo cual facilitó mi entendimiento de redux y el trabajo. Dejo el link para su revisión https://redux-toolkit.js.org/
Dependiendo del tipo de componente, podrá encontrar componentes stateful y stateless, pero en su mayoría serán stateful.

## Link Proyecto

https://imdb-escalab.vercel.app/
