import { useState } from 'react'
import './App.css'
import Card from './componets/cards/Card';

function App() {


  return (
    <>
      <h1 className='bg-red-400 font-bold text-slate-950 p-8 text-5xl text-center shadow-2xl' >Tailwind test</h1>

      <Card userName="DRLOV" />

      <Card userName="MyWorld!" />

    </>
  )
}

export default App;
