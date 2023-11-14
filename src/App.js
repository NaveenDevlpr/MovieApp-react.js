import './App.css';
import Home from './pages/Home';
import { Box } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Details from './pages/Details';
function App() {
  return (
    <Box>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    
    </Box>
  );
}

export default App;
