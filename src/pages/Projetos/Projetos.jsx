import './styles.css'
import { useState } from 'react'

export function Projetos() {
  const [select, setSelect] = useState('todos')
  return (
    <div className='body-projetos'>
        <p className='textrobotichsobre'>02 - WORK</p>
        <h1 className='titlesobre'>Projetos</h1>
        <hr className='linha' />
        <div className='filter-buttons'>
          <button className='button-filter' style={{width: 70}}
          onClick={() => setSelect('todos')}>Todos</button>
          <button className='button-filter' style={{width: 110}}
          onClick={() => setSelect('front-end')}>Front-end</button>
          <button className='button-filter'style={{width: 80}}
          onClick={() => setSelect('mobile')}>Mobile</button>
          <button className='button-filter' style={{width: 100}}
          onClick={() => setSelect('back-end')}>Back-end</button>
        </div>
    </div>

  )
}