import './App.css';
import Search from './component/Search';
import { Router } from '@reach/router'
import People from './component/People';
import Planets from './component/Planets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search/>
      </header>
        <Router>
          <People path = "/people/:id" />
          <Planets path = "/planets/:id" />
        </Router>
    </div>
  );
}

export default App;
