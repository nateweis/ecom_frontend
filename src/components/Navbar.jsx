import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';


const Navbar = () => {
    return (
        <Containter>
            <Wrapper>

                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{color: 'gray', fontSize: '16px'}} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>ART BY DEV</Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>

            </Wrapper>
        </Containter>
    )
}

// ////////// Style //////////////
const Containter = styled.div`
    height: 60px;
    ${mobile({height: "50px", marginBottom: "7px"})}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0"})}
`;

// Left Section Styles
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;

    ${mobile({marginLeft: "5px"})}
`
const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`

// Center Section Styles
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: "18px"})}
`

// Right Section Styles
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:2})}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

export default Navbar
