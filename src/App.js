import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
function App() {
  return (

    // BEM 
    <div className="App">
      <Router>
      <Header />

    <Switch>

      <Route path={'/'} exact component={Home} />
      <Route path={'/search'} component={SearchPage} />

      </Switch>





      <Footer />
      </Router>
    </div>
  );
}

export default App;
