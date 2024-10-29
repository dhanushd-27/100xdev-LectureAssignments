import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
