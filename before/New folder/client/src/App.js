import {BrowserRouter as Router,Route} from 'react-router-dom'
import PageRender from './PageRender';
<<<<<<< HEAD
import Header from './components/Header'


=======
import Login from './pages/login'
import Register from './pages/register'
import Home from './pages/home'
import { useSelector } from 'react-redux'
import Header from './pages/Header';
import './styles/global.css';
>>>>>>> f076130880921a98fd7b6a20b4c8440843a231c4

function App() {
  const { auth} = useSelector(state => state)
  return (
    <Router>
      <input type="checkbox" id="theme" />
    <div className="App">
<<<<<<< HEAD
      <div className="main">
      {auth.token && <Header />}
      <Route exact path="/" component = {auth.token ? Home: Login}/>
=======
      {auth.token && <Header/>}
      <Route exact path="/" component={auth.token ? Home : Login} />
>>>>>>> f076130880921a98fd7b6a20b4c8440843a231c4
      <Route exact path='/:page' component={PageRender} />
      <Route exact path='/:page/id' component={PageRender} />
    </div> 
    </div> 
    </Router>
  );
}

export default App;
