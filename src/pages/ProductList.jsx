import styled from "styled-components"
import Announcement from "../components/Announcement"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import { mobile } from "../responsive"

const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Spirals</Title>
            <FilterContainer>

                <Filter> 
                    <FilterText>Filter Products:</FilterText> 
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Purple</Option>
                        <Option>Black</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>300 X 400</Option>
                        <Option>200 X 500</Option>
                        <Option>350 X 400</Option>
                        <Option>400 X 400</Option>
                    </Select>
                </Filter>

                <Filter> 
                    <FilterText>Sort Products:</FilterText> 
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>

            </FilterContainer>
            <Products />
            <ContactForm />
            <Footer />
        </Container>
    )
}

// ////// Style /////////
const Container = styled.div` 

`
const Title = styled.h1` 
    margin: 20px;
`
const FilterContainer = styled.div` 
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div` 
    margin: 20px;
    ${mobile({
        margin: "0 20px",
        display: "flex",
        flexDirection: "column"
    })}
`
const FilterText = styled.span` 
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight: "0", fontSize: 18})}
`
const Select = styled.select` 
    padding: 10px;
    margin-right: 20px;
    ${mobile({margin: "12px 0"})}
`
const Option = styled.option` 

`

export default ProductList
