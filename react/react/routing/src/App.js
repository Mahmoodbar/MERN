import './App.css';
import Welcome from './component/Welcome'
import Number from './component/Number'
import Color from './component/Color'
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
      < Welcome path = "/home"/>
      <Number path = "/:id" />
      <Color path = "/:id/:color/:background"/>
      </Router>
   
    </div>
  );
}

export default App;
