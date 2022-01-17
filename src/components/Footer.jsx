import { Instagram, Facebook, Twitter, Pinterest, Phone, Email } from "@material-ui/icons"
import styled from "styled-components"
import Img from '../images/major-credit-card.png'

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>ART BY DEV</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Id pariatur, voluptatum voluptate voluptas neque laudantium eos 
                    voluptatibus non alias? Soluta fugiat quasi, perspiciatis harum non 
                    voluptates alias ut porro officia!
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="3b5999"> <Facebook /> </SocialIcon>
                    <SocialIcon bg="e4405f"> <Instagram /> </SocialIcon>
                    <SocialIcon bg="55acee"> <Twitter /> </SocialIcon>
                    <SocialIcon bg="e60023"> <Pinterest /> </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Spirals</ListItem>
                    <ListItem>Water Colors</ListItem>
                    <ListItem>Print Shop</ListItem>
                    <ListItem>Custom Orders</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem> <Phone style={{marginRight:'10px'}} /> 123 465 7890</ContactItem>
                <ContactItem> <Email style={{marginRight:'10px'}} /> conactact@website.com</ContactItem>
                <Payment src={Img} />
            </Right>

        </Container>
    )
}

// ///// Style //////
const Container = styled.div` 
    display: flex;
`
// Left
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p` 
    margin: 20px 0;
`
const SocialContainer = styled.div` 
    display: flex;
`
const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

// Center
const Center = styled.div`
    flex: 1;
    padding: 20px;
`
const Title = styled.h3` 
    margin-bottom: 30px;
`
const List = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li` 
    width: 50%;
    margin-bottom: 10px;
`

// Right
const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div` 
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img` 
    width:50%;
    /* background-color: #e9f5f575; */
    margin-top: -20%;
`

export default Footer
