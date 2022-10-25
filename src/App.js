import React from 'react';
import Header from  './components/Header/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Blog from './components/Blog';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      
      <Router>
    <Header/>
    <Routes>
    <Route path="/" element={<Home/>}> </Route>
    <Route path="/home" element={<Home/>}> </Route>
      <Route path="/Blog" element={<Blog/>}> </Route>
    </Routes>
</Router>      
    </div>
  )
}

export default App;