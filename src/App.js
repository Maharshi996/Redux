import React from "react"
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import './App.css';
import Counter from "./Redux/containers/Counter.js"
import InputShower from "./Redux/containers/InputShower.js";
import FetchData from "./Redux/containers/FetchData.js";

function App() {
  return (
    <Provider store = {store}>
    <div id="app">
      <Counter/>
      <InputShower/>
      <FetchData/>
      </div>
    </Provider>
    
  );
}

export default App;
