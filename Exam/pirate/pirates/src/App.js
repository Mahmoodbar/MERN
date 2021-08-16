import './App.css';
import { Router } from '@reach/router';
import Create from './views/Create'
import Main from  './views/Main'

function App() {
  return (
    <div className="App">
          <Router>

            <Create path = '/new' ></Create>
            <Main path ='/pirate'> </Main>
     
      </Router>
    </div>
  );
}

export default App;
