import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Graph from './Graph';
function App() {

  return (
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Graph' element={<Graph/>}/>
      </Routes>
    
  );
}


export default App;
