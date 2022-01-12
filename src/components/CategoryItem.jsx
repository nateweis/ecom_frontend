import styled from "styled-components";
import Pic from '../images/imgFiles';

const CategoryItem = (props) => {
    return (
        <Container>
            <Img src={Pic[props.item.img]} />
            <Info>
                <Title>{props.item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

// ////// Styles //////////
const Container = styled.div` 
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Img = styled.img` 
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div` 
    position: absolute;
    width: 100%;
    height: 100% ;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0,0,0,.4);
`
const Title = styled.h1` 
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button` 
    border: none;
    padding : 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

export default CategoryItem
