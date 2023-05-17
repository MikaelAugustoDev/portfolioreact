import { styled } from "styled-components"


const EmailA = styled.a`
    position: fixed;
    width: 50px;
    height: 300px;
    bottom: 0;
    right: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    gap: 20px;
    transition: 0.5s ease-in-out;
    
    &:hover{
        cursor: pointer;
        transition: 0.5s ease-in-out;
        transform: translate(0px, -5px);
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

const Pemail = styled.p`
    color: #fff;
    transform: rotate(90deg);
    margin-top: 110px;
    transition: 0.3s ease-in-out;

    &:hover {
        color: #0099ff;
    }
`

const DivLinhaEmail = styled.div`
    border: 1px solid #999;
    height: 50px;
    margin-top: 100px;
`

const Email = () => {

    return (

        <EmailA href="mailto:mikaelaugustodev@gmail.com" target="_blank">

            <Pemail>mikaelaugustodev@gmail.com</Pemail>

            <DivLinhaEmail></DivLinhaEmail>

        </EmailA>

    )

}

export { Email }