import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  const colorGenerator = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };



  return (

    <div className="w-full h-screen" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-3xl text-black font-bold">
          <button
            onClick={() => setColor(colorGenerator)}
            className="px-5 outline-none py-3 rounded-2xl shadow-md text-white" style={{ backgroundColor: color }}>click here to generate random color</button>



        </div>
      </div>
    </div>



  )
};

export default App;
