# proyecto ecommerce zapatillas
El proyecto esta pensado para hacer un ecommerce de zapatillas y otros articulos 

**Desafio  Entregable 1**
Se agrego la app de react como se pedía

**Desafio  Entregable 2**
Se agrego el navbar como componente.
se cambio el nombre de las pestañas.

**Desafio  Entregable 3**
Creé el componente CartWidget.js con su ícono y se ubico en el navbar.
Creé el componente ItemListContainer.js con un greeting y que muestre el mensaje dentro de un contenedor.

**Desafio  Entregable 4**

se Creo el componente ItemCount para aumentar y bajar Stock.
Desde ItemListContainer llamo cada producto, los valores del stock y el initial se los doy por prop, tal como pedía el desafío.
Le puse un poco de estilo a mis productos, utilizando Cards de bootstrap-react.

**Desafio  Entregable 5**
se creo el componente Item.js
se creo el componente ItemList.js que agrupa los items usando map.
se utilizo async promise que hace que los items se rendericen a los 2 segundos de espera, es llamado desde productServices(items).
Mis productos se muestran 2 segundos de carga después de que se muestre el título y el header.

**Desafio  Entregable 6**
se creo componente ItemDetail e ItemDetailContainer.
 cada producto se va a /detail/:{id}, carga y muesta una card, además de un detalle en texto.
Ahora también el Home carga.


**Desafio  Entregable 7**
 se agrego las rutas correspondietes (Inicio ,Nosotros, contacto,)
 se puede navegar por las paginas




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
