import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Blogs from './pages/(logged in)/Blogs/Blogs';
import CreatePage from './pages/(logged in)/CreateBlogs/CreatePage';
import { RecoilRoot } from 'recoil';
import { Toaster } from 'react-hot-toast';
import UpdatePage from './pages/(logged in)/UpdateBlogs/UpdatePage';

const App = () => {

  return (
    <>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/blogs' element={<Blogs />}/>
            <Route path='/blog/create' element={<CreatePage />}/>
            <Route path='/blog/update' element={<UpdatePage />}/>
          </Routes>

          < Toaster position='bottom-right' toastOptions={{
            style: {
              fontFamily: "Inter"
            }
          }} />
        </BrowserRouter>
      </RecoilRoot>
    </>
  )
}

export default App
