import './App.css';
import NewComponent from './components/NewComponent';

function App() {
  return (
    <div className="App">
      <NewComponent firstName={"Tala "}  LastName={"Qawasmi"} Age={25} HairColor={"Brown"}/>
      <NewComponent firstName={"Diala"} LastName={"Qawasmi"} Age={22} HairColor={"Brown"}/>
      <NewComponent firstName={"Lara"} LastName={"Qawasmi"} Age={19} HairColor={"Brown"}/>
      <NewComponent firstName={"Nana"} LastName={"Qawasmi"} Age={16} HairColor={"Brown"}/>
    </div>
    
  );
}

export default App;
