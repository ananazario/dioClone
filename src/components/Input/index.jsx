import { Controller } from 'react-hook-form'
import { InputContainer, IconContainer, InputText, ErrorText } from './style'

const Input = ({ leftIcon, name, control, errorMessage, ...rest }) => {
  return (<>
    <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({field}) =>  <InputText {...field} {...rest} />}
        />
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
  </>)
}

export default Input