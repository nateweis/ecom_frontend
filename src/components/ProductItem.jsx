import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from "@material-ui/icons";
import styled from "styled-components";
import Pic from '../images/imgFiles';

const ProductItem = ({item}) => {
    return (
        <Container>
            <Circle />
            <Img src={Pic[item.img]} />
            <Info>

                <Icon>
                    <ShoppingCartOutlined />
                </Icon>

                <Icon>
                    <SearchOutlined />
                </Icon>

                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
                
            </Info>
        </Container>
    )
}

// ///// Style ////////

const Circle = styled.div` 
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`
const Img = styled.img` 
    height: 75%;
    z-index:2 ;
`
const Info = styled.div` 
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: rgba(0,0,0,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease ;
`
const Icon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const Container = styled.div` 
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{
        opacity:1 ;
    }
`

export default ProductItem
