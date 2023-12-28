import React from "react"
import { Provider } from "react-redux";
import store from "./Redux/store.js";
import './App.css';
import Counter from "./Redux/components/Counter.js"
import InputShower from "./Redux/components/InputShower.js";

function App() {
  return (
    <Provider store = {store}>
    <div id="app">
      <Counter/>
      <InputShower/>
      </div>
    </Provider>
    
  );
}

export default App;
