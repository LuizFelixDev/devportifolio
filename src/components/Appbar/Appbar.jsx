import './Appbar.css'
import logo from '../../assets/gemini-svg.svg'
export function Appbar() {
  return (
    <header className='bar'>
      <img src={logo} alt="" className='logo' />
      <p>DEV.PORTIFOLIO</p> 
      <nav className='nav-bar'>
        <button className='sobre'>./Home</button>
        <button className='sobre'>./sobre</button>
        <button className='projetos'>./projetos</button>
        <button className='contato'>./contato</button>
      </nav>
    </header>
  )
}