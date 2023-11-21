import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Blogs from './components/Blogs';
import BlogDetail from './components/BlogDetail';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/pages/:pageId" component={BlogDetail} />
        {/* Otras rutas y componentes */}
      </Switch>
    </Router>
  );
};

export default App;