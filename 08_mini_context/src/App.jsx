
import './App.css'
import Login from './components/Login/Login'
import Profile from './components/Login/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <UserContextProvider>
      <h1>Hello Welcome We Learn Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
