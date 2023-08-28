import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing_page from './components/Landing_page/Landing_page';
import Header from './components/Header/Header';
import Timer from './components/Timer/Timer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Timer/>
    </div>
  );
}

export default App;
