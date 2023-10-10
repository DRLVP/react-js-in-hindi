import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (

    <div className="w-full h-screen" style={{ backgroundColor: color }} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-3xl text-black font-bold">
          <button
            onClick={() => setColor("red")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "red" }}>red</button>

          <button
            onClick={() => setColor("blue")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "blue" }}>blue</button>

          <button
            onClick={() => setColor("green")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "green" }}>green</button>

          <button
            onClick={() => setColor("purple")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "purple" }}>purple</button>

          <button
            onClick={() => setColor("cyan")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "cyan" }}>cyan</button>

          <button
            onClick={() => setColor("silver")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "silver" }}>silver</button>

          <button
            onClick={() => setColor("pink")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "pink" }}>pink</button>

          <button
            onClick={() => setColor("coral")}
            className="px-5 outline-none py-3 rounded-2xl shadow-md" style={{ backgroundColor: "coral" }}>coral</button>

        </div>
      </div>
    </div>



  )
}

export default App;
