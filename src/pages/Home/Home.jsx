import './styles.css'
import foto from '../../assets/image.png'
import bolinha from '../../assets/bolinha.png'
import git from '../../assets/gitlogo.png'
import linkedin from '../../assets/linkedin.png'
import carta from '../../assets/carta.png'


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
            Sou Luiz Henrique Felix Guedes, desenvolvedor Full Stack <br />
            focado em construir aplicações modernas, eficientes e escaláveis. <br />
            Tenho experiência com React, React Native, Next.js, Node.js, TypeScript, <br />
            Prisma e PostgreSQL, participando de todas as etapas do desenvolvimento, <br />
            da arquitetura à entrega. Encaro desafios com responsabilidade, <br />
            aprendizado contínuo e compromisso com qualidade. Meu objetivo <br />
            é desenvolver soluções que gerem impacto real e entreguem valor para pessoas e negócios.
          </p>
          <div className='my-redes'>
            <button className='bt1'
              onClick={() => window.open('https://github.com/Luizfelixdev', '_blank')}
            ><img src={git} alt='GitHub' className='git' /></button>
            <button className='bt2'
              onClick={() => window.open('https://www.linkedin.com/in/luizfelixdev/', '_blank')}>
              <img src={linkedin} alt='Linkedin' className='linkedin' /></button>
            <button
              className="bt3"
              onClick={() => window.location.href = 'https://mail.google.com/mail/u/0/#inbox?compose=new'}
            >
              <img src={carta} alt="carta" className="carta" />
            </button>
          </div>
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


