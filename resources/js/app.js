import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import TopScreen from './components/TopScreen';
import Footer from './components/Footer';

const logo = () => TopScreen;
const Home = () => <h2>Home</h2>;
const TODO = () => <h2>TODO</h2>;
const FAQ = () => <h2>FAQ</h2>;

function App() {
  const [showTop, setShowTop] = useState(true);

  return (
    <Router>
      <div>
        <Header onHomeClick={() => setShowTop(true)} />
        <Switch>
          <Route exact path="/" component={logo} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/todo" component={TODO} />
          <Route exact path="/faq" component={FAQ} />
        </Switch>
        {showTop && <TopScreen />}
        {/* 他のコンポーネントや要素を追加 */}
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));