import logo from './logo.svg';
import './App.css';
import Tasks from './Components/Tasks';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Tasks/>
    </div>
  );
}

export default App;
