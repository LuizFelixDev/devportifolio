import './styles.css';

export function Sobre(){
  return(
    <div className='body-sobre'>
      <p className='textrobotichsobre'>01 - ABOUT</p>
      <h1 className='titlesobre'>Sobre mim</h1>
      <div className='sobrea'>
        <p>Sou estudante de Sistemas de Informação na UFRN e tenho <br />
        grande interesse em desenvolvimento frontend e mobile. <br />
        Tenho experiência com React Native, React, Next.js, <br />
        JavaScript, Node.js e TypeScript, criando interfaces <br />
        modernas, responsivas e focadas na melhor experiência para <br />
        o usuário.
        </p>
        <p className='sobreb'>
            Iniciei minha trajetória no Instituto Federal da Paraíba, onde me <br />
            formei técnico, e hoje curso SI na UFRN buscando sempre <br />
            aprimorar minhas habilidades. Trabalho com integração de APIs, <br />
            gerenciamento de estado, navegação entre telas e Git/GitHub no <br />
            controle de versão.
        </p>
        <p className='sobreb'>
            Atualmente atuo como desenvolvedor back-end, com foco em soluções <br />
            eficientes e escaláveis. Mantenho projetos open source no GitHub e estou <br />
            sempre em busca de desafios de alto impacto.
        </p>
      </div>
    </div>
  )
}