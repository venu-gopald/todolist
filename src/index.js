import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import reducer from "../src/reducers/reducers";
import {Provider} from "react-redux";
import Header from './components/Header';
import TodoList from './components/TodoList'
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>
  , rootElement);
