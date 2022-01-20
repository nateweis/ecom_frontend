import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Pic from '../images/imgFiles'

const Cart = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            
            <Wrapper>
                <Title>YOUR CART</Title>

                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTextContainer>
                        <TopText>Shopping Cart (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTextContainer>
                    <TopButton type="filled" >CHECKOUT NOW</TopButton>
                </Top>

                <Bottom>
                    <Info>
                        <ProductContainer>
                            <ProductDetails>
                                <Img src={Pic["p1"]} />
                                <Details>
                                    <ProductName> <b>Product:</b> Painting of Aleph </ProductName>
                                    <ProductId> <b>ID:</b> 345730947 </ProductId>
                                    <ProductColor />
                                    <ProductSize> <b>Size:</b> 300 X 350 </ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>Price</PriceDetails>
                        </ProductContainer>
                    </Info>

                    <Summary>sum</Summary>
                </Bottom>
            </Wrapper>

            <Footer />
        </Container>
    )
}
// //// Style /////
const Container = styled.div` `

const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

// Top 
const Top = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button` 
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black": "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTextContainer = styled.div` `

const TopText = styled.span` 
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

// Bottom
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const Info = styled.div`
    flex:3;
`
const ProductContainer = styled.div` 

`
const ProductDetails = styled.div` 

`
const Img = styled.img` 

`
const Details = styled.div` 

`
const ProductName = styled.span` 

`
const ProductId = styled.span` 

`
const ProductColor = styled.div` 

`
const ProductSize = styled.span` 

`
const PriceDetails = styled.div` 

`
const Summary = styled.div`
    flex:1;
`

export default Cart
