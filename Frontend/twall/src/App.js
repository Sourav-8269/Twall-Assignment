import logo from './logo.svg';
import './App.css';
import Tasks from './Components/Tasks';
import Navbar from './Components/Navbar';
import { store } from './Redux/store';

function App() {
  console.log(store.getState())
  return (
    <div className="App">
      <Navbar/>
      <Tasks/>
    </div>
  );
}

export default App;
