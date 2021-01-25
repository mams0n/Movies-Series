import './App.css';
import { Provider } from 'react-redux'
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';
import Landing from './components/home/Landing'
import { HashRouter as Router, Route } from 'react-router-dom'

import store from './store'
import Movie from './components/home/Movie';
import Main from './components/home/Main'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
