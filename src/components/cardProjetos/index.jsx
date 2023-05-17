import AOS from "aos";
import { useEffect } from "react";
import { styled } from "styled-components";
import 'aos/dist/aos.css';

const Card = styled.a`
    width: 70%;
    min-height: 350px;
    border: 2px solid #0099ff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    text-decoration: none;
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 425px) {
        flex-direction: column;
    }
`

const DivImage = styled.div`
    background-size: cover;
    background-position: center;
    width: 30%;
    min-height: 100%;
    border-radius: 10px 0 0 10px;

    @media (max-width: 425px) {
        display: none;
    }
`

const DivInfos = styled.div`
    width: 70%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    border-left: 2px solid #0099ff;

    @media (max-width: 425px) {
        width: 100%;
        min-height: 100%;
    }
`

const TitleCard = styled.h2`
    color: #fff;
    border-bottom: 2px solid #0099ff;
    margin-bottom: 20px;
`

const TitleLanguages = styled.h3`
    color: #0099ff;
    font-weight: 300;
    margin-bottom: 10px;
`

const Linguagens = styled.h4`
    color: #fff;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 30px;
    text-align: center;
`

const TitleSobre = styled.h5`
    color: #0099ff;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 10px;
    font-size: 16px;
`

const Sobre = styled.p`
    color: #fff;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    text-align: center;
`

const A = styled.a`
    text-decoration: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: none;
    background-color: #0099ff;
    color: #fff;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    transition: 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 20px 5px #0099ff;
    }
`

const CardProjeto = ({ background, ...props }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            delay: 200,
        });
    }, []);

    return (

        <Card href={props.linkSite} target="_blank" data-aos="zoom-in">

            <DivImage style={{ backgroundImage: `url(${background})` }}></DivImage>

            <DivInfos>

                <TitleCard>{props.title}</TitleCard>

                <TitleLanguages>Linguagens usadas:</TitleLanguages>

                <Linguagens>{props.linguagens}</Linguagens>

                <TitleSobre>Descrição:</TitleSobre>

                <Sobre>{props.sobre}</Sobre>

                <A href={props.linkGit} target="_blank">GitHub</A>

            </DivInfos>

        </Card>

    )

}

export { CardProjeto }