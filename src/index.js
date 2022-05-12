//This code is for Custom Hook
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import configureProductsStore from './hooks-store/products-store';

configureProductsStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// //This is code for Context-API
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import ProductsProvider from './context/products-context';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsProvider>
// );


//Below is the Redux Code.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import productReducer from './store/reducers/products';

// const rootReducer = combineReducers({
//   shop: productReducer
// });

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );
