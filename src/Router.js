import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.js'
import Profile from './Profile.js'
import Minigame from './MiniGame.js'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App/> } />
                <Route path="/Profile" element={ <Profile/> } />
                <Route path='/Minigame' element={ <Minigame/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;