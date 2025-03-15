import './App.css'
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
        <Home />

        <Login />
        <Register />

        <CreateGame />
        <EditGame />

        <GameDetails />

        <GameCatalog />
      </main>

    </div>
  )
}

export default App
