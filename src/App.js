import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Header from './common/header/index'
import Home from './pages/home';
import Detail from './pages/detail'
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div>
      <Header />
      <BrowserRouter>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail' exact component={Detail}></Route>
      </BrowserRouter>
      </div>
    </Provider>
    
  );
}

export default App;
