import styled from "styled-components"
import Pic from '../images/background_art2.jpg'
import { mobile } from "../responsive"

const Login = () => {
    return (
        <Container src={Pic}>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username" />
                    <Input placeholder="password" />
                    <Button>LOGIN</Button>
                    <Hr />
                    <Link>Forgot Your Password?</Link>
                    <Link>Creat a New Account</Link>
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
           rgba(255,255,255,.1),
           rgba(255,255,255,.1)
        ),
        url(${props => props.src}) center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width:25% ;
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
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40% ;
    margin: 10px 0;
    padding: 10px;
`

const Button = styled.button`
    width: 40% ;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal; 
    color: white;
    margin-bottom: 15px;
`
const Hr = styled.hr`
    margin-bottom: 20px;
    border-color: rgba(0 ,0,0, .1);
`
const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

export default Login
