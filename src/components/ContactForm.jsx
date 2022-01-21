import { Email } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../responsive"

const ContactForm = () => {
    return (
        <Container>
            <Title>Contact Me</Title>
            <Desc>Need a custom piece? Send me a message!  </Desc>
            <Button> <Email /> </Button>
        </Container>
    )
}

// ///// Style //////////
const Container = styled.div` 
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${mobile({height: "50vh"})}
`
const Title = styled.h1` 
    font-size: 70px;
    margin-bottom: 20px;
    ${mobile({fontSize: "50px"})}
`
const Desc = styled.div` 
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", fontSize: "18px"})}
`

const Button = styled.button` 
    width: 60px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    cursor: pointer;
`

export default ContactForm
