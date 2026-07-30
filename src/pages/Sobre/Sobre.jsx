import './styles.css';
import curso from '../../assets/curso.png'
import job from '../../assets/job.png'
import { Tecnologias } from '../../components/Tecnologias/Tecnologias'

export function Sobre() {
    return (
        <div className='body-sobre'>
            <p className='textrobotichsobre'>01 - ABOUT</p>
            <h1 className='titlesobre'>Sobre mim</h1>
            <hr className='linha' />
            <div className='container-sobre'>
                <div>
                    <p className='sobrea'>Sou estudante de Sistemas de Informação na UFRN e tenho <br />
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
                    <Tecnologias />
                </div>
                <div className='container-formações'>
                    <p className='text-sobre-card'>FORMAÇÃO</p>
                    <div className='card-sobre'>
                        <div>
                            <img src={curso} className='icons' />
                        </div>
                        <div>
                            <p className='data'>2024 – Atualmente</p>
                            <p className='curso'>Sistemas de Informação</p>
                            <p className='universidade'>Universidade Federal do Rio Grande do Norte</p>
                        </div>
                    </div>
                    <div className='card-sobre'>
                        <div>
                            <img src={curso} className='icons' />
                        </div>
                        <div>
                            <p className='data'>2020 – 2024</p>
                            <p className='curso'>Técnico em Edificações</p>
                            <p className='universidade'>IFPB - Instituto Federal da Paraíba</p>
                        </div>
                    </div>
                    <p className='text-sobre-card'>EXPERIÊNCIA</p>
                    <div className='card-sobre'>
                        <div>
                            <img src={job} className='icons' />
                        </div>
                        <div>
                            <p className='data'>Mar 2026 – Hoje</p>
                            <p className='curso'>Desenvolvedor Front-end · Tech Lead</p>
                            <p className='universidade'>App de Delivery de Serviços (Projeto pessoal em equipe)</p>
                        </div>
                    </div>
                    <div className='card-sobre'>
                        <div>
                            <img src={job} className='icons' />
                        </div>
                        <div>
                            <p className='data'>Jan 2026 – Hoje</p>
                            <p className='curso'>Desenvolvedor NoCode</p>
                            <p className='universidade'>SEAPAC, Brasil</p>
                        </div>
                    </div>
                    <div className='card-sobre'>
                        <div>
                            <img src={job} className='icons' />
                        </div>
                        <div>
                            <p className='data'>Out 2025 – Jul 2026</p>
                            <p className='curso'>Desenvolvedor Web</p>
                            <p className='universidade'>UFRN — Sistema para loja de roupas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}