import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  // hooks and dependencies
  const [length, setLength] = useState(8);
  const [numAllowed, setNumber] = useState(false);
  const [charAllowed, setCharacter] = useState(false);

  const [password, setPassword] = useState("");

  /******************************************
                PASSWORD GENERATOR 
  ******************************************/
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys";
    if (numAllowed) string += "0123456789";
    if (charAllowed) string += "*-^~";

    // generate password using loop
    for (let i = 1; i <= length; i++) {
      // character index
      let char = Math.floor(Math.random() * string.length + 1);
      // pick the character from index
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);



  /*********************************
                PASSWORD COPY TO CLIPBOARD 
  **********************************/
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password);
  }, [password]);


  /***********************************
    useEffect hooks for re-run method when manupulate the dependecies 
  ************************************/
  useEffect(() => { passwordGenerator() }, [length, numAllowed, charAllowed])


  /******************************************
            USEREF HOOK FOR PASSWORD REFFERENCE
   ******************************************/
  const passwordRef = useRef(null);

  return (
    <>
      <h1 className='text-white text-center font-bold text-5xl mt-20'>Password Generator</h1>

      <div className='max-w-lg flex-col shadow-xl bg-cyan mx-auto mt-20 rounded-md text-red-500 p-4 bg-neutral-800'>
        <div className='w-full flex flex-col justify-center  gap-4 shadow-2xl backdrop-blur-lg p-3'>
          <input type="text"
            value={password}
            className='w-full outline-none rounded-sm bg-cyan-950  text-white p-4 text-2xl'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className='w-2/4  bg-blue-600 rounded-sm text-2xl text-white m-auto py-2 drop-shadow-lg'>copy</button>
        </div>

        <div className='flex gap-6 justify-center text-lg font-bold mt-4'>
          <div className='flex  items-center justify-center gap-x-1'>
            <input type="range"
              min={8}
              max={20}
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
