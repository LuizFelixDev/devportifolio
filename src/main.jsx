import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Home} from './pages/Home/Home'
import { Appbar } from './components/Appbar/Appbar'
import {Sobre} from './pages/Sobre/Sobre'
import {Projetos} from './pages/Projetos/Projetos'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Appbar></Appbar>
    <Home></Home>
    <Sobre></Sobre>
    <Projetos></Projetos>
  </StrictMode>,
)
