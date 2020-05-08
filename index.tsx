import * as React from "react";
import ReactDom from "react-dom";
import { Header } from "./Header";
//import { Filter } from "./Filter";
import { List } from "./List";

function App() {
  return (
    <div>
      <Header />
      <List />
    </div>
  );
}

function MyName() {
  return <h3>127 connections</h3>;
}

ReactDom.render(<App />, document.getElementById("root"));
