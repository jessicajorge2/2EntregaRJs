import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '..Components/Navbar';
import ItemListContainer from '..Components/ItemListContainer';
import ItemDetailContainer from '..Components/ItemDetailContainer';

function App() {
  return (
      <Router>
          <div>
              <Navbar />
              <Switch>
                  <Route exact path="/" component={ItemListContainer} />
                  <Route exact path="/category/:id" component={ItemListContainer} />
                  <Route exact path="/item/:id" component={ItemDetailContainer} />
              </Switch>
          </div>
      </Router>
  );
}

