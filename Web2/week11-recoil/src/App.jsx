import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom } from './store/atoms/counter';
import { evenSelector } from './store/selectors/evenSelector';

//Re renders many times

// function App() {
//   const [count, setCount] = useState(0)

//   function increment(){
//     setCount(c => c+1);
//   }

//   function decrement(){
//     setCount(c => c-1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>

//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </>
//   )
// }

// atom bhaiya ko use kiya hai below
// function App(){

//   return(
//     <>
//       <RecoilRoot>
//         <CurrentCount />
//         <IncreaseCount />
//         <DecreaseCount />
//       </RecoilRoot>
//     </>
//   )
// }

// function CurrentCount(){
//   const count = useRecoilValue(counterAtom);

//   return <div>{count}</div>
// }

// function DecreaseCount(){
//   const setCount = useSetRecoilState(counterAtom);

//   function decreaseCount(){
//     setCount(c => c - 1)
//   }

//   return <div>
//     <button onClick={decreaseCount}>Decrease</button>
//   </div>
// }

// function IncreaseCount(){
//   const setCount = useSetRecoilState(counterAtom);

//   function increaseCount(){
//     setCount(c => c + 1);
//   }

//   return <div>
//     <button onClick={increaseCount}>Increase</button>
//   </div>
// }

// selector
function App(){
  return(
      <RecoilRoot>
        <Counter />
        <Buttons />
        <Even />
      </RecoilRoot>
  )
}

function Counter(){
  const counter = useRecoilValue(counterAtom);

  return <div>
    {counter}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(counterAtom);

  function increase(){
    setCount(c => c + 2);
  }

  function decrease(){
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Even(){
  const even = useRecoilValue(evenSelector);

  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App
