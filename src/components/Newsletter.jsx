import { Send } from "@material-ui/icons"
import styled from "styled-components"


const Newsletter = () => {
    return (
        <Container>
            <Title>Contact Me</Title>
            <Desc>Need a custom piece? Send me a message  </Desc>
            <InputContainer>
                <Input placeholder="Your Email" />
                <Button> <Send /> </Button>
            </InputContainer>
        </Container>
    )
}

// ///// Style //////////
const Container = styled.div` 

`
const Title = styled.h1` 

`
const Desc = styled.div` 

`
const InputContainer = styled.div` 

`
const Input = styled.input` 

`
const Button = styled.button` 

`

export default Newsletter
