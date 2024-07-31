import { Provider } from 'react-redux';
import {store} from './app/store';
import { useState } from 'react';
import Header from './components/Header';
import Screen from './components/Screen';
import SignIn from './pages/SignIn';
import SignOut from './pages/SignOut';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Trending from './pages/Trending';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Screen/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
        <Route path='/signout' element={<SignOut/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='dash' element={<Screen/>}>
          <Route path='trending' element={<Trending/>}></Route>
          <Route path='settings' element={<Cart/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
