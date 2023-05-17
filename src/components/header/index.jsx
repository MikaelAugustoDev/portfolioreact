import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { HamburguerMenu } from "../MenuHamburguer";


const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 0 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

const Headers = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0px 10px;

    circle {
        stroke-width: 25px;
        stroke-linecap: round;
        fill: transparent;
    }
`

const AnimationLogo = styled(motion.div)`
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        width: 12%;
    }

    @media (max-width: 425px) {
        width: 18%;
        margin-top: -20px;
    }
`

const Nav = styled.nav`
    width: 90%;
    height: 100%;

    @media (max-width: 768px) {
        width: 88%;
    }

    @media (max-width: 425px) {
        display: none;
    }
`

const NavBurguer = styled.nav`
    display: none;
    @media (max-width: 425px) {
        display: flex;
        width: 90%;
        height: 100%;
        align-items: center;
        justify-content: flex-end;
        padding: 0px 30px;
    }
`

const Ul = styled.ul`
    list-style: square;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;
    padding-right: 50px;
`

const AnimationNav = styled(motion.div)`
    display: none;

    @media (max-width: 425px) {
        display: flex;
        width: 90%;
        justify-content: flex-end;
    }

`

const Li = styled.li`
    color: #fff;
    font-size: 18px;
    border-bottom: 2px solid #0099ff;
    transition: 0.3s ease-in-out;

    &:hover{
        color: #0099ff;
    }
`

const LinkEd = styled(Link)`
    text-decoration: none;
`

const LinkLogo = styled(Link)`
    width: 10%;
    height: 100%;
`

const Header = () => {

    return (

        <Headers>

            <AnimationLogo
                initial={{ opacity: 0, y: 0, z: -100 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.75, 0.25, 1]
                }}
            >



                <motion.svg
                    width="200"
                    height="200"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    animate="visible"
                >
                    <motion.circle
                        cx="300"
                        cy="400"
                        r="200"
                        stroke="#0099ff"
                        variants={draw}
                        custom={2}
                    />
                    <text
                        x="300"
                        y="420"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fill="#0099ff"
                        fontSize="280px"
                    >
                        M
                    </text>
                </motion.svg>



            </AnimationLogo>

            <AnimationNav
                initial={{ opacity: 0, y: 0, z: -100 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{
                    duration: 4,
                    delay: 1.5,
                    ease: [0, 0.75, 0.25, 1]
                }}
            >


                <NavBurguer>

                    <HamburguerMenu />

                </NavBurguer>

            </AnimationNav>


            <Nav>



                <Ul>

                    <motion.div
                        initial={{ opacity: 0, y: 0, z: -100 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 4,
                            delay: 1.5,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >

                        <LinkEd to='/'>
                            <Li>Home</Li>
                        </LinkEd>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 0, z: -100 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 4,
                            delay: 1.7,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >

                        <LinkEd to='/habilidades'>
                            <Li>Habilidades</Li>
                        </LinkEd>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 0, z: -100 }}
                        animate={{ opacity: 1, y: 0, z: 0 }}
                        transition={{
                            duration: 4,
                            delay: 1.9,
                            ease: [0, 0.75, 0.25, 1]
                        }}
                    >

                        <LinkEd to='/projetos'>
                            <Li>Projetos</Li>
                        </LinkEd>

                    </motion.div>

                </Ul>

            </Nav>

        </Headers>

    )

}

export { Header }