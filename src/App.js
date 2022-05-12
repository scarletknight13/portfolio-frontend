import '.styles/App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import {Route, Routes} from 'react-router-dom';
const URL = 'https://intense-bastion-62185.herokuapp.com/'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/projects'>
          <Projects URL={URL}/>
        </Route>
        <Route path='/about'>
          <About URL={URL}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
