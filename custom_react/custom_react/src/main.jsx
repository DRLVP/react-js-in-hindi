import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// function MyApp() {
//   return (
//     <h1>I am a Bad Man</h1>
//   )
// }

// const reactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   text: 'click here to visit google'
// }

// const reactElementNew = (
//   <a href='github.com' target='_blank'>Github</a>
// )

const newElem = React.createElement(
  //element type
  'button',
  //attributes
  { type: 'submit', },
  //children || text
  'visit github'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  // reactElementNew
  newElem
)
