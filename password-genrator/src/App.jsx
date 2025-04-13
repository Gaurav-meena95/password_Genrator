import { useState,useCallback,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [length , setLength] = useState(8);
  const [numberAllow , setNumberAllow] = useState(false);
  const [charAllow , setCharAllow] = useState(false);
  const [pass , setPassword] = useState('');

  const PasswaordGenrtor = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    let pass=''

    if (numberAllow) str +='0123456789';
    if (charAllow) str +='!@#$%^&*()_+=~`;:/?<>,.|';
    for (let i =1 ;i <= array.length; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }

  },[length,numberAllow,charAllow])

  return (
    <>
  
    </>
  )
}

export default App
