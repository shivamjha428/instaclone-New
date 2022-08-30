import React from "react";
import Landing from "./Landing";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./postview";
import Form from "./form";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Post" element={<Post />} />
        <Route path="/form"  element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;