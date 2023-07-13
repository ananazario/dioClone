import Header from '../../components/Header';
import { Container, Column, Title, TitleHighlight } from './style';
import Card from '../../components/Card';
import UserInfo from '../../components/UserInfo';

const Feed = () => {
    return (
        <>
            <Header autenticado={true} />
            <Container>
                <Column flex={3}>
                    <Title>Feed</Title>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Column>
                <Column flex={1}>
                    <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
                    <UserInfo percentual={80} nome='Ana Nazario' image='https://github.com/ananazario.png' />
                    <UserInfo percentual={30} nome='Ana Nazario' image='https://github.com/ananazario.png' />
                    <UserInfo percentual={40} nome='Ana Nazario' image='https://github.com/ananazario.png' />
                    <UserInfo percentual={80} nome='Ana Nazario' image='https://github.com/ananazario.png' />
                </Column>
            </Container>
        </>
    )
}

export default Feed