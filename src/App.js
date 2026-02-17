import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeDetails from './components/EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EmployeeList />} />
        <Route path='/employee/:id' element={<EmployeeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
