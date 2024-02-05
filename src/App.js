// import logo from './logo.svg';
import './App.css';
import EmpCreate from './EmpCreate';
import EmpDetail from './EmpDetail';
import EmpEdit from './EmpEdit';
import EmpListing from './EmpListing';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React JS CRUD json server</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmpListing/>}/>
        <Route path='/employee/create' element={<EmpCreate/>}/>
        <Route path='/employee/edit/:empid' element={<EmpEdit/>}/>
        <Route path='/employee/detail/:empid' element={<EmpDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
