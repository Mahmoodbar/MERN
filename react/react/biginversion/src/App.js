
import './App.css';
import PersonCard from './component/PersonCard.js';

function App() {
  return (
    <div className="App">
     <PersonCard firstName ="mahmood" lastName= " Barakat" age={23}  hairColor="black " />
     <PersonCard firstName ="Mostafa" lastName= " Barakat" age={27}  hairColor="brown " />
     <PersonCard firstName ="Mohammad" lastName= " Barakat" age={24}  hairColor=" black " />
    </div>
  );
}

export default App;
