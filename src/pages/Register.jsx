import styled from "styled-components"
import Pic from '../images/background_art1.jpg'
import { mobile } from "../responsive"

const Register = () => {
    return (
        <Container src={Pic}>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVATE POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                    <Hr />
                    <Link>Sign In</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
// ////// Style ///////
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: 
        linear-gradient(
           rgba(255,255,255,.3),
           rgba(255,255,255,.3)
        ),
        url(${props => props.src}) center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:40% ;
    padding: 20px;
    background-color: white;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40% ;
    margin: 20px 10px 0 0;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
`
const Button = styled.button`
    width: 40% ;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal; 
    color: white;
`
const Hr = styled.hr`
    width: 100%;
    margin: 15px 0;
    border-color: rgba(0 ,0,0, .1);
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default Register
