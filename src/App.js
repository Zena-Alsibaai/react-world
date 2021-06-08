import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import About from './pages/About';



function App() {
  return (
    // on fait un router pour l'url, pour pouvoir naviger entre les pages
    // Le mot exact pour ouvrir la page exacte
   <BrowserRouter>
    <Switch>
      <Route path ="/" exact component={Home} />
      <Route path ="/a-propos" exact component={About} />
      <Route component={NotFound} />
    </Switch>
   </BrowserRouter>
  );
}

export default App;
