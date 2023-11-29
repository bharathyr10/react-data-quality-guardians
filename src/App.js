import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./features/navBar/NavBar";
import { Login } from "./features/login/Login";
import RuleGenerator from "./features/rule/RuleGenerator";
import QueryGenerator from "./features/query/QueryGenerator";

function App() {
  return (
    <div>
      {window.location.pathname.startsWith("/rule") ? (
        <React.Fragment>
          <NavBar></NavBar>
        </React.Fragment>
      ) : null}
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/rule" element={<RuleGenerator />}></Route>
        <Route path="/query" element={<QueryGenerator />}></Route>
      </Routes>
    </div>
  );
}

export default App;
