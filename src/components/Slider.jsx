import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import {mobile} from '../responsive';
import {slideItems} from '../data';
import Pic from '../images/imgFiles';

const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') setSliderIndex(sliderIndex > 0 ? sliderIndex -1 : 2)
        else setSliderIndex(sliderIndex < 2 ? sliderIndex + 1 : 0)
    }

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper sliderIndex={sliderIndex}>
                {slideItems.map((item) =>(
                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer>
                            <Img src={Pic[item.img]} />
                        </ImageContainer>
    
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

// //// Style ///////
const Container = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    z-index: 2;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.sliderIndex * -100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`
const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
    
`
const Img = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 20px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

export default Slider
