import { useRecoilValue } from 'recoil';
import './App.css'
import Header from './components/Header'
import SideBar from './components/SideBar';
import SummaryCard from './components/SummaryCard'
import { isOpenAtom } from './recoil/atom';

function App() {
  const isOpen = useRecoilValue(isOpenAtom)

  return(
    <div>
      { isOpen ? <SideBar /> : null }

      <div className={`flex h-screen w-screen flex-col bg-leetcode-black gap-8 justify-start items-center ${ isOpen ? "-z-10" : null } `}>
        <Header />
        <SummaryCard />
      </div>
    </div>
  )
}

export default App
