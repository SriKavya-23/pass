import {useState} from 'react'
import {
  Container,
  Heading,
  Para,
  PasswordInput,
  StrengthIndicator,
} from 'styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const isStrongPassword = () => {
    return password.length >= 8
  }

  return (
    <Container>
      <Heading>Password Validator</Heading>
      <Para>Check how strong and secure is your password</Para>
      <PasswordInput
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <StrengthIndicator>
        {!isStrongPassword() && (
          <p>Your password must be at least 8 characters</p>
        )}
      </StrengthIndicator>
    </Container>
  )
}
export default PasswordValidator
