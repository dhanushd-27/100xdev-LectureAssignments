import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Blogs from './pages/Blogs/Blogs';
import CreatePage from './pages/CreateBlogs/CreatePage';

const App = () => {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/blog/create' element={<CreatePage />}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
