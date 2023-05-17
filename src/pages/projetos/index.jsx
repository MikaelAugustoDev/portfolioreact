import { styled } from "styled-components"
import { Header } from "../../components/header";
import { motion } from "framer-motion";
import { CardProjeto } from "../../components/cardProjetos";
import Portfolio from "../../assets/PortfolioMikael.png";
import { Footer } from "../../components/footer";
import { Email } from "../../components/Email";
import { Redes } from "../../components/RedesContainer";
import GitAPI from "../../assets/gitimg.png"
import Mario from "../../assets/mario.png"
import Cartao from "../../assets/cartao.png"
import NFT from "../../assets/nft.png"
import Formulario from "../../assets/formulario.png"
import PokeAPI from "../../assets/pokeapi.png"
import ApiFrases from "../../assets/apifrases.png"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = styled.main`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    gap: 50px;
    margin-bottom: 50px;
`

const Title = styled.h1`
    color: #fff;
    margin-top: -20px;

    @media (max-width: 768px) {
        margin-top: -40px;
    }
`

const Animation = styled(motion.div)`
    min-width: 100%;
    display: flex;
    justify-content: center;
`



const Projetos = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 200,
        });
    }, []);

    return (

        <>

            <Header />

            <Main>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 2.8,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                >

                    <Email />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 2.6,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                >

                    <Redes />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 2.0,
                        ease: [0, 0.75, 0.25, 1]
                    }}
                >

                    <Title>Projetos</Title>

                </motion.div>

                <Animation
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 2.4,
                        ease: [0, 0.75, 0.25, 1]
                    }}
                >

                    <CardProjeto
                        background={Portfolio}
                        title="Portfólio"
                        linguagens="React | styled-components | javascript"
                        sobre="Portfólio Web feito com React, usando algumas libs como => styled-components para estilizações, motion e aos para animações e react-router-dom para interface SPA"

                    />

                </Animation>

                <Animation
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 2.6,
                        ease: [0, 0.75, 0.25, 1]
                    }}
                >

                    <CardProjeto
                        linkSite="https://git-api-mikael.vercel.app/"
                        linkGit="https://github.com/MikaelAugustoDev/GitAPI"
                        background={GitAPI}
                        title="Api GitHub"
                        linguagens="HTML | sass | JavaScript | api"
                        sobre="Projeto de busca de usuário do github usando a API do github para puxar os dados de usuario e seus repositórios"
                    />

                </Animation>

                <Animation
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 2.8,
                        ease: [0, 0.75, 0.25, 1]
                    }}
                >
                    <CardProjeto
                        background={ApiFrases}
                        title="Api Frases"
                        linguagens="HTML | css | JavaScript | api"
                        sobre="Projeto do Frontend Mentor que ao clicar no botão muda para outra frase aleatória da API"
                        linkSite="https://geradorde-frases-mikael-dev.vercel.app/"
                        linkGit="https://github.com/MikaelAugustoDev/GeradordeFrasesMikaelDev"
                    />

                </Animation>
                <CardProjeto
                    background={Mario}
                    title="Page Mario"
                    linguagens="HTML | css | JavaScript"
                    sobre="Landing Page de um projeto da DevQuest sorbe uma pagina de lançamento do filme do Mario"
                    linkGit="https://github.com/MikaelAugustoDev/MarioDevemDobro"
                    linkSite="https://mario-devem-dobro-mikael-dev.vercel.app/"
                />
                <CardProjeto
                    background={Cartao}
                    title="Cartão de Pagamento"
                    linguagens="HTML | css | JavaScript "
                    sobre="Projeto para simular um pagamento virtual com os dados do cartao"
                    linkGit="https://github.com/MikaelAugustoDev/ProjetoCartaoMikael"
                    linkSite="https://projeto-cartao-mikael.vercel.app/"
                />
                <CardProjeto
                    title="LandingPage NFT"
                    background={NFT}
                    linguagens="React | styled-components | javascript"
                    sobre="LandingPage sobre venda de NFTs online"
                    linkSite="https://landing-page-nfts.vercel.app/"
                    linkGit="https://github.com/MikaelAugustoDev/Landing-Page-NFTs"
                />
                <CardProjeto
                    title="Formulario"
                    background={Formulario}
                    linguagens="React | typescript | styled-components | regex | nodejs | mongodb | sequelize | bcrypt | express"
                    sobre="Projeto de um formulario para cadastro fullstack, na qual você irá se registrar e logar, projeto ainda em andamento !"
                    linkSite="https://formulario-camp-mikael.vercel.app/"
                    linkGit="https://github.com/MikaelAugustoDev/Formulario-Camp"
                />
                <CardProjeto
                    title="Pokedex"
                    background={PokeAPI}
                    linguagens="react | styled-components | javascript | context-api | api | material-ui"
                    sobre="Pagina de Pokemons feita 100% consumindo a API dos Pokemons no site poke.api utilizando React, estilizando com styled-components, alguns botões prontos do mateiral UI, context-api para mudança de thema e react-router-dom para mudança de pagina interna de cada pokemon."
                    linkGit="https://github.com/MikaelAugustoDev/Pokedex-API"
                    linkSite="https://pokedex-api-mikael.vercel.app/"
                />

            </Main>

            <Footer />

        </>

    )

}

export { Projetos }