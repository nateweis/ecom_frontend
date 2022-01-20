import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const ContactPage = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <Title>CONTACT ME</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="phone" />
                    <Input placeholder="email" />                   
                    <Textarea placeholder="message" />
                    <Button>SEND</Button>                
                </Form>
            </Wrapper>

            <Footer />
        </Container>
    )
}
// ////// Style ///////
const Container = styled.div`

`
const Wrapper = styled.div`
    width:40% ;
    padding: 20px;
    background-color: #e9f5f5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
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
const Textarea = styled.textarea`
    width: 99% ;
    min-height: 70px;
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
`


export default ContactPage
