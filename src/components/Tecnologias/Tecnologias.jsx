import './styles.css';
import js from "../../assets/js.png" 
import ts from '../../assets/ts.png'
import react from '../../assets/react.png'
import next from '../../assets/next.svg'
import express from '../../assets/express.svg'
import sql from '../../assets/sql.png'


export function Tecnologias() {
    return (
      <div className='containerTecnologias'>
        <h2 className='title-tech'>Tecnologias</h2>
        <div className='container-img'>
          <img src={js} alt="" className='img-tech'/>
          <img src={ts} alt="" className='img-tech'/>
          <img src={react} alt="" className='img-tech'/>
          <img src={next} alt="" className='img-next'/>
          <img src={express} alt="" className='img-express'/>
          <img src={sql} alt="" className='img-sql'/>
        </div>
      </div>
    );
}