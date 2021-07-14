
import './App.css';
import Info from './components/Info.js';

function App() {
  return (
    <div className="App">
     
   <Info name="Jane Doe" Age="45" color="black" /> 

  <Info  name="smith John" Age="88" color="brown" />

   <Info  name="millard" Age="20" color="black" />
   <Info name="maria " Age="30" color="brown" />
    </div>
  );
}

export default App;
