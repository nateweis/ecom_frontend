import React from 'react'
import styled from 'styled-components'

const Announcement = () => {
    return (
        <Container>
            Buy 1 Print Get a Second for 50% Off!!!!
        </Container>
    )
}

// ///// Styles //////////
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

export default Announcement
