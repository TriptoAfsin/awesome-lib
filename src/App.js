import FrontPage from './components/Pages/FrontPage';
import Navbar from './components/Pages/Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
          <Route path='/' exact component={FrontPage}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/contact' exact component={Contact}></Route>
      </Switch>
    </Router>
  );
}

export default App;
