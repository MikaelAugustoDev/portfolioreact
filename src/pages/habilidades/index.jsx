import { styled } from "styled-components"
import { Header } from "../../components/header"
import { CardHabilidade } from "../../components/cardHabilidade"
import { motion } from "framer-motion"
import ReactLogo from "../../assets/react.svg"
import TypescriptLogo from "../../assets/typescript.svg"
import ReduxLogo from "../../assets/redux.svg"
import AngularLogo from "../../assets/angular.svg"
import NodeJS from "../../assets/node.svg"
import MongoDB from "../../assets/mongodb.svg"
import MySQL from "../../assets/mysql.svg"
import PostgreeSQL from "../../assets/postsql.svg"
import Javascript from "../../assets/javascript.svg"
import Jest from "../../assets/jest.svg"
import Sass from "../../assets/sass.svg"
import Css from "../../assets/css.svg"
import Html from "../../assets/html.svg"
import { Footer } from "../../components/footer"
import { Email } from "../../components/Email"
import { Redes } from "../../components/RedesContainer"

const Body = styled.body`
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const Main = styled.main`
    width: 90%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: column;
    margin-bottom: 20px;
`

const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
    margin-top: 20px;
`

const DivHabilit = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`

const Animacao = styled(motion.div)`

`

const Habilidades = () => {

    return (

        <Body>

            <Header />

            <Main>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 2.0,
                        ease: [0, 0.75, 0.25, 1]
                    }}
                >

                    <Title>Habilidades</Title>

                </motion.div>



                <DivHabilit>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.2,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="React"
                            img = { ReactLogo }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.3,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Redux"
                            img = { ReduxLogo }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.4,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Typescript"
                            img = { TypescriptLogo }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.5,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="NodeJS"
                            img = { NodeJS }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.6,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Angular"
                            img = { AngularLogo }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.7,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="MongoDB"
                            img = { MongoDB }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.8,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="MySQL"
                            img = { MySQL }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.9,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="PostgreSQL"
                            img = { PostgreeSQL }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 3,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Javascript"
                            img = { Javascript }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 3.1,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Jest"
                            img = { Jest }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 3.2,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="Sass"
                            img = { Sass }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 3.3,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="CSS3"
                            img = { Css }
                        />

                    </Animacao>

                    <Animacao
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 3.4,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >
                        <CardHabilidade
                            name="HTML5"
                            img = { Html }
                        />

                    </Animacao>



                </DivHabilit>


            </Main>

            <Email/>

            <Redes/>

            <Footer/>

        </Body>

    )

}

export { Habilidades }