import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}/>
                <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}/>
                <Route path='/' element={<Landing/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout(){
  return(
    <div style={{height: "100vh"}}>
      <Link to="/">Allen</Link> | <Link to="/neet/online-coaching-class-11">Class 11</Link> | <Link to="neet/online-coaching-class-12">Class 12</Link>
      <Outlet />
      <h5>Footer</h5>
    </div>
  )
}

function Landing(){
  return (
    <>
      <h1>Hey There!</h1>
    </>
  )
}

function ErrorPage(){
  return (
    <>
      <h1>404! Page not found</h1>
    </>
  )
}

function Class11Program(){
  return(
    <>
      <h1>Class 11 program</h1>
    </>
  )
}

function Class12Program(){
  return(
    <>
      <h1>Class 12 program</h1>
    </>
  )
}

export default App
