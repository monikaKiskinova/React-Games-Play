import './App.css'

import { Routes, Route } from 'react-router'

import CreateGame from './components/create-game/CreateGame'
import EditGame from './components/edit-game/EditGame'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameDetails from './components/game-details/GameDetails'
import Header from './components/header/Header'
import Home from './components/header/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {

  return (
    <div id="box">

      <Header />

      <main id="main-content"> 
        <Routes>
          <Route index element={<Home />} />
          <Route path='/games' element={<GameCatalog />} />
          <Route path='/games/create' element={<CreateGame />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes> 

        {/* <EditGame /> */}

        {/* <GameDetails /> */}

      </main>

    </div>
  )
}

export default App
