import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswaordGenrtor = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_+=~`;:/?<>,.|";
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllow, charAllow,setPassword]);



  useEffect(()=>{
    PasswaordGenrtor()
  },[length,numberAllow,charAllow,PasswaordGenrtor])

  return (
    <>
      <div className="main_container">
        <h1>Random PassWord GenertatoR</h1>
        <div className="input_box">
          <input type="text"
           value={pass} 
           placeholder="Password" 
           readOnly
           ref={passwordRef}
            />
          <button onClick={copyPassword} className="btn_copy">Copy</button>
        </div>
        <div className="check_box">
          <div className="check_input range">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length:{length}</label>

            <div className="check_input">
              <input 
              type="checkbox" 
              defaultChecked ={numberAllow}
              id="numberINput"
              onChange={()=>{
                setNumberAllow((pev)=> !pev)
              }}
              />
              <label>Number</label>
            </div>


            <div className="check_input">
            <input
            type="checkbox"
              defaultChecked ={charAllow}
              id="numberINput"
              onChange={()=>{
                setCharAllow((pev)=> !pev)
              }}
             />
            <label>Charcter</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
