import './App.css'
import Header from './components/Header'
import SummaryCard from './components/SummaryCard'

function App() {

  return(
    <div className='flex h-screen w-screen flex-col bg-leetcode-black gap-8 justify-start items-center'>
      <Header />
      <SummaryCard />
    </div>
  )
}

export default App
