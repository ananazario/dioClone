import Header from '../../components/Header';
import { Column, Container, SubTitleLogin, Title, TitleLogin, Wrapper, Row } from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { MdLock, MdEmail } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { api } from '../../services/api'

const schema = yup.object({
    email: yup.string().email('E-mail não é válido').required(),
    password: yup.string().min(3, 'No minimo 3 caracteres').required(),
}).required()

const Cadastro = () => {

    const navigate = useNavigate()
    const handleSignup = () => navigate('/feed')

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })
    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
            if (data.length === 1) {
                navigate('/feed') 
            }
        } catch {
            alert('Houve um erro, tente novamente')
        }
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                    <Link to='/login'>VOLTAR PARA LOGIN</Link>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<BsFillPersonFill />} />
                            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />} />
                            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                            <Button title="Criar minha conta" variant='secondary' />
                        </form>
                        <Row>
                            <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Cadastro