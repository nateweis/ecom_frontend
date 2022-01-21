import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import Pic from '../images/imgFiles'
import { mobile } from "../responsive"

const ProductVeiw = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            
            <Wrapper>

                <ImageContainer> <Img src={Pic["p1"]} /> </ImageContainer>

                <InfoContainer>
                    <Title>Spiral A</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quam minus sed dolore autem fuga, a aspernatur repellat dolorum perspiciatis, 
                        voluptate quis neque nisi beatae consequatur saepe. Aliquam, eveniet. Cumque!
                    </Desc>
                    <Price>$ 150</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="silver"/>
                            <FilterColor color="purple"/>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <Select>
                                <Option>300 X 400</Option>
                                <Option>200 X 500</Option>
                                <Option>350 X 400</Option>
                                <Option>400 X 400</Option>
                            </Select>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>

                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>

                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>

            </Wrapper>

            <ContactForm />
            <Footer />
        </Container>
    )
}
// ///// Style ///////////
const Container = styled.div` `

const Wrapper = styled.div` 
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})}
`
// Info
const ImageContainer = styled.div` 
    flex:1;
`
const Img = styled.img`
    width: 100%;
    max-height: 80vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div` 
    flex:1;
    padding: 0 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1` 
    font-weight: 200;
`
const Desc = styled.p` 
    margin: 20px 0;
`
const Price = styled.span` 
    font-weight: 100;
    font-size: 40px;
`

// Filter
const FilterContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 30px 0 ;
    ${mobile({width: "100%"})}
`
const Filter = styled.div` 
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span` 
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div` 
    background-color: ${props => props.color};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    ${mobile({margin: "0 3px"})}
`
const Select = styled.select` 
    margin-left: 10px;
    padding: 5px;
`
const Option = styled.option` `

// Add
const AddContainer = styled.div`
    width:50% ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 600;
    transition: .5s all ease;

    &:hover{
        background-color: #f8f4f4;
    }
`

export default ProductVeiw
