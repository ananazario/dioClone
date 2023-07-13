import React from 'react'
import { Container, Row, Wrapper, Menu, MenuRight, BuscarInputContainer, Input, UserPicture } from './style'
import Button from '../Button'
import BannerDio from '../../assets/bannerDio.png'
import LogoDio from '../../assets/logoDio.png'

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src={LogoDio} alt='Logo da DIO' />
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..." />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <UserPicture src="https://github.com/ananazario.png" />
                ) : (
                    <>
                        <MenuRight>Home</MenuRight>
                        <Button title='Entrar' />
                        <Button title='Cadastrar' />
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export default Header