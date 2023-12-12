import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/userContext'
import Home from './components/Home'
import Login from './components/Login'

function App() {
  const [pseudo, setPseudo] = useState(null)

  const handleLoginSubmit = (userName)=>{
    setPseudo (userName)
  }

  return (
   pseudo?
      <UserContext.Provider value={{isLogged:true, pseudo:pseudo}}>
        <Home />
      </UserContext.Provider>
      :
      <Login onLoginSubmit={handleLoginSubmit}/>
  )
}

export default App
