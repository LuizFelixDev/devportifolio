import './styles.css'
import foto from '../../assets/image.png'
import bolinha from '../../assets/bolinha.png'

export function Home() {

  return (
    <div className='body'>
      <div className='container'>
        <div className='information'>
          <p className='textrobotic'>&gt;  HELLO_WORLD.EXE</p>
          <h1 className='title'>
            Luiz Henrique <br />
            <span className='azul-claro'>
              Software Developer.
            </span>
          </h1>
          <p className='text-home'>
            Desenvolvedor de software apaixonado por construir <br />
            produtos digitais elegantes e escaláveis. Transformo ideias <br />
            complexas em código limpo e experiências que importam.
          </p>
        </div>
        <div className='moldura'>
          <div className='foto'>
            <img src={foto} alt="" className='img' />
            <div className='opentowork'>
              <img src={bolinha} className='bolinha' />
              <p className='text'> aberto para trabalhos</p>
            </div>
          </div>
        </div>

      </div>

    </div>

  )
}


