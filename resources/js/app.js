import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import TopScreen from './components/TopScreen';
import Footer from './components/Footer';

const LOGIN = () => <h2>LOGIN</h2>;
const TODO = () => <h2>TODO</h2>;
const FAQ = () => <h2>FAQ</h2>;

function App() {
  const [showTop, setShowTop] = useState(true);

  return (
    <Router>
      <div>
        <Header onLOGINClick={() => setShowTop(true)} />
        <Switch>
          <Route exact path="/">
            {showTop && <TopScreen />}
          </Route>
          <Route exact path="/login" component={LOGIN} />
          <Route exact path="/todo" component={TODO} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));