import styled from "styled-components"
import {popularProducts} from '../data'
import ProductItem from "./ProductItem"

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <ProductItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

// ///// Style ////////
const Container = styled.div` 
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default Products
