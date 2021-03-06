import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Pic from '../images/imgFiles'
import { mobile } from "../responsive"

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
                                    <ProductColor color="black" />
                                    <ProductSize> <b>Size:</b> 300 X 350 </ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>

                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductQuantity>2</ProductQuantity>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 150</ProductPrice>

                            </PriceDetails>

                        </ProductContainer>

                        <Hr />

                        <ProductContainer>

                            <ProductDetails>
                                <Img src={Pic["p2"]} />
                                <Details>
                                    <ProductName> <b>Product:</b> Painting of Bet </ProductName>
                                    <ProductId> <b>ID:</b> 348509348 </ProductId>
                                    <ProductColors>
                                        <ProductColor color="darkblue" />
                                        <ProductColor color="green" />
                                    </ProductColors>
                                    <ProductSize> <b>Size:</b> 300 X 350 </ProductSize>
                                </Details>
                            </ProductDetails>

                            <PriceDetails>

                                <ProductAmountContainer>
                                    <Remove />
                                    <ProductQuantity>1</ProductQuantity>
                                    <Add />
                                </ProductAmountContainer>
                                <ProductPrice>$ 150</ProductPrice>

                            </PriceDetails>

                        </ProductContainer>
                    </Info>

                    <SummaryContainer>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 150.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.60</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.60</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 150.00</SummaryItemPrice>
                        </SummaryItem>

                        <Button>CHECKOUT NOW</Button>
                    </SummaryContainer>

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
    ${mobile({padding: "10px"})}
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
const TopTextContainer = styled.div`
    ${mobile({display: "none"})}
`

const TopText = styled.span` 
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

// Bottom
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Hr =styled.hr` 
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 10px 0;
`
const Info = styled.div`
    flex:3;
`

// Product Details
const ProductContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetails = styled.div` 
    flex: 2;
    display: flex;
`
const Img = styled.img` 
    width: 200px;
`
const Details = styled.div` 
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span` `

const ProductId = styled.span` `


const ProductColors = styled.div` 
    display: flex;
    align-items: center;
`
const ProductColor = styled.div` 
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${props => props.color};
`
const ProductSize = styled.span` `

// Price 
const PriceDetails = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({backgroundColor: "#fdfdfd"})}
`
const ProductAmountContainer = styled.div` 
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductQuantity = styled.div` 
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "10px 15px"})}
`
const ProductPrice = styled.div` 
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`

// Summary
const SummaryContainer = styled.div`
    flex:1;
    border: .5px solid lightgray;
    padding: 20px;
    border-radius: 10px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div` 
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"} ;
    font-size: ${props => props.type === "total" && "24px"} ;
`
const SummaryItemText = styled.span` 

`
const SummaryItemPrice = styled.span` 

`
const Button = styled.button` 
    width: 100% ;
    padding: 10px;
    background-color: black;
    color: white;
    cursor: pointer;
    border: none;
    font-weight: 600;
`

export default Cart
