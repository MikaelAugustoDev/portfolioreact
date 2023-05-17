import { styled } from "styled-components"

const Card = styled.div`

    @media (max-width: 2560px) {
        width: 300px;
        height: 400px;
        border: 2px solid #0099ff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        border-radius: 5px;
        padding: 15px 5px;      
        align-items: center;
    }

    @media (max-width: 1440px) {
        width: 160px;
        height: 210px;
    }
`

const Img = styled.img`

    @media (max-width: 2560px) {
        width: 200px;
        height: 200px;
    }
    
    @media (max-width: 1440px) {
        width: 130px;
        height: 130px;
    }  

`

const P = styled.p`

    @media (max-width: 2560px) {
        color: #fff;
        font-weight: 500;
        text-align: start;
        width: 100%;
        font-size: 38px;
    }

    @media (max-width: 2560px) {
        font-size: 18px;
    }
`


const CardHabilidade = (props) => {

    return (

        <Card>

            <Img src={props.img}/>

            <P>{props.name}</P>

        </Card>

    )

}

export { CardHabilidade }