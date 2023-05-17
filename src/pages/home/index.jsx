import { styled } from "styled-components"
import { Header } from "../../components/header"
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Foto from "../../assets/foto.png"
import { Footer } from "../../components/footer"
import { Redes } from "../../components/RedesContainer";
import { Email } from "../../components/Email";
import Curriculo from "../../assets/mikaelCurriculo.pdf"

const Main = styled.main`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
`

const Infos = styled.div`
    @media (max-width: 2560px) {
        min-width: 70%;
        min-height: 90vh;
        display: flex;
        flex-direction: column;
        padding-top: 80px;
        gap: 10px;
    }

    @media (max-width: 425px) {
        width: 90%;
        padding-top: 20px;
    }
`

const P = styled.p`

    @media (max-width: 2560px) {
        color: #0099ff;
        font-size: 80px;
        margin-bottom: 20px;
    }

    @media (max-width: 1440px) {
        font-size: 24px;
        margin-bottom: 20px;
    }

    @media (max-width: 425px) {
        font-size: 20px;
    }

    @media (max-width: 320px) {
        font-size: 16px;
    }
`

const H1 = styled.h1`
    
    @media (max-width: 2560px) {
        color: #fff;
        font-size: 230px;
    }

    @media (max-width: 1440px) {
        font-size: 80px;
    }

    @media (max-width: 768px) {
        font-size: 70px;
    }

    @media (max-width: 425px) {
        font-size: 46px;
    }

    @media (max-width: 375px) {
        font-size: 44px;
    }

    @media (max-width: 320px) {
        font-size: 38px;
    }
`

const H2 = styled.h2`

    @media (max-width: 2560px) {
        color: #999;
        font-size: 180px;
    }

    @media (max-width: 1440px) {
        font-size: 60px;
    }

    @media (max-width: 425px) {
        font-size: 40px;
        margin-bottom: 20px;
    }

    @media (max-width: 375px) {
        font-size: 38px;
    }

    @media (max-width: 320px) {
        font-size: 34px;
    }
`

const Pinfo = styled.p`

    @media (max-width: 2560px) {
        color: #999;
        max-width: 1500px;
        margin-bottom: 40px;  
        font-size: 50px;
    }

    @media (max-width: 1440px) {
        margin-bottom: 40px;  
        max-width: 600px;
        font-size: 18px;
    }

    @media (max-width: 425px) {
        font-size: 16px;
    }

    @media (max-width: 320px) {
        font-size: 14px;
    }
`

const Button = styled.button`

    @media (max-width: 2560px) {
        width: 500px;
        height: 100px;
        color: #0099ff;
        background: none;
        border: 2px solid #0099ff;
        border-radius: 5px;
        font-size: 40px;
        font-weight: 700;
        transition: 0.3s ease-in-out;
    }

    @media (max-width: 1440px) {
        width: 190px;
        height: 45px;
        color: #0099ff;
        background: none;
        border: 2px solid #0099ff;
        border-radius: 5px;
        font-size: 18px;
        font-weight: 700;
        transition: 0.3s ease-in-out;
    }

    &:hover {
        box-shadow: 5px 5px 2px 0px #0099ff;
        transform: translate(-5px, -5px);
        cursor: pointer;
    }
`

const AnimationButton = styled(motion.div)`
    width: 190px;
    transition: 0.5s ease-in-out;
`

const Cv = styled.a`
    text-decoration: none;
`

const Sobre = styled.div`
    width: 70%;
    min-height: 550px;
    display: flex;
    padding-top: 100px;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media (max-width: 425px) {
        min-width: 90%;
        padding-top: 50px;
    }

    @media (max-width: 375px) {
        min-width: 95%;
    }
`

const SobreMim = styled.div`
    width: 60%;
    height: 100%;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        min-width: 100%;
        height: 60%;
    }
`

const Photo = styled.div`
    width: 40%;
    height: 100%;

    @media (max-width: 768px) {
        width: 100%;
        height: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
`

const TextSobre = styled.p`

    @media (max-width: 2560px) {
        color: #fff;
        font-size: 40px;
    }   

    @media (max-width: 1440px) {
        font-size: 16px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
    }
`

const PhotoPerfil = styled.div`

    @media (max-width: 2560px) {
        width: 1000px;
        height: 1000px;
        border: 2px solid #0099ff;
        border-radius: 50%;
        background-image: url('${Foto}');
        background-size: cover;
    }

    @media (max-width: 1440px) {
        width: 380px;
        height: 380px;
        border: 2px solid #0099ff;
        border-radius: 50%;
        background-image: url('${Foto}');
        background-size: cover;
    }

    @media (max-width: 425px) {
        width: 300px;
        height: 300px;
    }
`

const Home = () => {

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

                <Infos>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 2.2,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                    >

                        <P>Oi, meu nome é</P>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 2.5,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                    >

                        <H1>Mikael Augusto,</H1>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 2.8,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                    >

                        <H2>Desenvolvedor Fullstack</H2>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 3.1,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                    >

                        <Pinfo >
                            Bem-vindo ao meu portfólio! Sou um desenvolvedor web especializado em React e Angular para Frontend, e NodeJS e MySQL para Backend. É um prazer ter você aqui e espero que encontre exatamente o que está procurando. Não hesite em entrar em contato comigo para discutir possíveis colaborações. Obrigado pela visita!</Pinfo>

                    </motion.div>

                    <AnimationButton
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 3.4,
                            ease: [0.42, 0, 0.58, 1]
                        }}
                    >

                        <Cv href={Curriculo} download>
                            <Button>Baixar CV</Button>
                        </Cv>

                    </AnimationButton>

                </Infos>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: 3.7,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                >

                    <Redes />

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.4,
                        delay: 3.9,
                        ease: [0.42, 0, 0.58, 1]
                    }}
                >

                    <Email />

                </motion.div>

                <Sobre>

                    <SobreMim>

                        <TextSobre data-aos="fade-right" data-aos-delay="200">Me chamo Mikael, tenho 21 anos e sou um apaixonado pela área de TI. Atualmente, atuo como Desenvolvedor Web Fullstack e estou muito animado em compartilhar minha jornada com você.<br /><br /></TextSobre>

                        <TextSobre data-aos="fade-right" data-aos-delay="250">
                            Iniciei meus estudos na Rocketseat, onde tive meu primeiro contato com o mundo do desenvolvimento web e aprendi noções básicas sobre essa carreira fascinante. Posteriormente, decidi investir no meu conhecimento, matriculando-me no curso em alta no mercado de desenvolvedores fullstack, o DevQuest. Foi uma experiência incrível, aprimorei meus conhecimentos em programação frontend e parti para aprender também sobre o backend.<br /><br />
                        </TextSobre>


                        <TextSobre data-aos="fade-right" data-aos-delay="300">
                            Tenho a ambição de me tornar um desenvolvedor Fullstack excepcional e estou determinado a alcançar esse objetivo. Já tenho alguns projetos pessoais em andamento e, também, algumas experiências de trabalho como freelancer.<br /><br />

                            Estou muito empolgado em seguir adiante na minha carreira, sempre em busca de novos desafios e oportunidades de crescimento.
                        </TextSobre>

                    </SobreMim>

                    <Photo>

                        <PhotoPerfil data-aos="fade-right" data-aos-delay="200"></PhotoPerfil>

                    </Photo>

                </Sobre>

            </Main>

            <Footer />

        </>

        // <TesteIcon width="800px" height="800px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ffffff">

        //     <g id="SVGRepo_bgCarrier" stroke-width="0" />

        //     <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

        //     <g id="SVGRepo_iconCarrier">

        //         <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265" />

        //     </g>

        // </TesteIcon>

    )

}

export { Home }