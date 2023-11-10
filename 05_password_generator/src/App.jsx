import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  // hooks and dependencies
  const [length, setLength] = useState(8);
  const [numAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  // password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys";
    if (numAllowed) string += "0123456789";
    if (charAllowed) string += "!@#$%^&*-_~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // password copy
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hooks for re-run method when manupulate the dependecies
  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed, setPassword])

  // +++++++++++++++ useRef hooks for reference ++++++++++++

  const passwordRef = useRef(null);

  return (
    <>
      <h1 className='text-white text-center font-bold text-5xl mt-7'>Password Generator</h1>

      <div className='w-screen max-w-lg shadow-xl bg-slate-700 mx-auto mt-8 rounded-md text-red-500 p-4'>
        <div className='w-full flex justify-between shadow-2xl'>
          <input type="text"
            value={password}
            className='w-3/4 outline-none rounded-md bg-cyan-950  text-white p-4 text-2xl'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-600 w-1/5 rounded-md text-2xl text-white'>copy</button>
        </div>

        <div className='flex gap-8 justify-center text-lg font-bold'>
          <div className='flex items-center justify-center gap-x-1'>
            <input type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-gray-400'> Label: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numAllowed}
              id='numberInput'
              onChange={() => { setNumber((prev) => !prev) }}
            />
            <label className='text-gray-400'>Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => { setCharacter((prev) => !prev) }}
            />
            <label className='text-gray-400'>Character</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App;
