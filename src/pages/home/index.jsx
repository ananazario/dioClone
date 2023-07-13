import Header from '../../components/Header';
import Banner from '../../assets/bannerDio.png'
import { Container, TextContent, Title, TitleHighLight } from './style';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()
    const handleSignup = () => navigate('/login')

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighLight>
                            Implemente 
                            <br />
                        </TitleHighLight>
                        o seu futuro agora
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant='secondary'onClick={handleSignup} />
                </div>
                <div>
                    <img src={Banner} alt="Principal" />
                </div>
            </Container>
        </>
    )
}

export default Home