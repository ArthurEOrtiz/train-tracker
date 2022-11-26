import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
// import reducer from './reducers/train-list-reducer';
// import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// const store = createStore(reducer);
// store.subscribe(() =>
//   console.log(store.getState())
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <React.Fragment>
    <App />
    </React.Fragment>
    {/* </Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
