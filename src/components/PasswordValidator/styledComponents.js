import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
font-family:"Roboto";
`
export const Container = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
 color:white;
 font-size:30px;
 font-family:"Roboto";
`
export const Para = styled.p`
 color:white;
 font-size:22px;
`
export const PasswordInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`

export const StrengthIndicator = styled.div`
  color: ${props => (props.strong ? 'green' : 'red')};
`
