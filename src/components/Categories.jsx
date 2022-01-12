import styled from "styled-components";
import {categories} from '../data';

import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </Container>
    )
}

// ////// Styles ////////
const Container = styled.div` 
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

export default Categories
