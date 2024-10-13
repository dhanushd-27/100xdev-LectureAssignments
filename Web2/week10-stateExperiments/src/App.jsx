import LightBulb from './components/LightBulb.jsx'
import './App.css'
import { createContext, useState } from 'react'

const BulbContext = createContext();

function App() {

  const [bulbOn, setBulbOn] = useState(true);

  return (
    <>
      <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
      }}>
        <LightBulb />
      </BulbContext.Provider>
    </>
  )
}

export { BulbContext }
export default App
