import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// MAIN PAGE & ENTRY POINT

function DemoApp() {
  // THIS FUNCTION IS END OF THE DAY PARSE TO AN OBJECT IN BEHIND THE SCENE

  return (
    <div>
      <h1>Welcome to my custom react app</h1>
    </div>
  )
}

/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  text: 'click here to visit google'
}

const anotherWorld = (
  <>
    <h1>Hey guyz how are you</h1>
    <button>click</button>
  </>
)
*/

// MAKE A COMPONENT USING REACT
const reactElement = React.createElement(
  //   "a", {
  //   href: "https://google.com", target: "_blank"
  // },
  //   "click here to visit"

  "h1", {}, "welcome to my react element"
)

ReactDOM.createRoot(document.querySelector('#root'))
  .render(
    // anotherWorld
    // reactElement
    <App />
  )
