import './App.css';
import { Router } from '@reach/router';
import Create from './views/Create'
import Main from './views/Main'
import Update from './views/Update'

function App() {
  return (
    <div className="App">
        <Router>

          <Main path= '/'></Main>
          <Create path = '/new' ></Create>
          <Update path = '/edit/:id' ></Update>

      </Router>
    </div>
  );
}
export default App;