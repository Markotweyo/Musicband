import React from 'react';
import {LibraryMusic} from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    height:60px;
    background-color: green;
`
const Wrapper = styled.div`
    display: flex;
    padding:10px 20px;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
const Language= styled.div`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer= styled.div`
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    
`
const Input = styled.input`
    border: none;
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const LOGO = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`




const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder ="Search"/>
                    </SearchContainer>
                </Left>
                <Center>
                    <LOGO>MUZIK</LOGO>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>LOGIN</MenuItem>
                    <MenuItem>
                    <LibraryMusic/>
                    </MenuItem>
                    
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;