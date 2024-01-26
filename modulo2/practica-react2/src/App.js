import Counter from './components/Counter/Counter';
import './App.css';
import Api from './components/Api/Api';
import Search from './components/SearchBar/Search';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
        <div className='content'>
          <Routes>
            <Route path='/' exact element={<Api/>}/>
            <Route path='/search' exact element={<Search/>}/>
            <Route path='/counter' exact element={<Counter/>}/>
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
