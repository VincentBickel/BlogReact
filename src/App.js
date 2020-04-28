import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Accueil from './Accueil';
import Post from './Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Accueil} />
        <Route path="/:postId" component={Post} />
      </BrowserRouter>
    </div>
  );
}

export default App;
