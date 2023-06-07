import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Form from "./components/Form";
import Table from "../src/components/Table";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}></Route>
        <Route path="/Datatable" element={<Table/>}></Route>
      </Routes >
      </BrowserRouter>
      
    </div>
  );
}

export default App;
