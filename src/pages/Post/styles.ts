import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MainContainer = styled.main`
  width: 100%;
  max-width: 54rem;
`
export const InfoContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  background: ${(props) => props.theme['blue-600']};
  border-radius: 10px;
  margin-top: -5.4375rem;
`
export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }
`
export const LinkPrevious = styled(Link)`
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`
export const ContentContainer = styled.div`
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h1 {
    color: ${(props) => props.theme['gray-100']};
  }
  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['blue-200']};
    }
  }
`

export const ParagrapherContainer = styled.p`
  padding: 2rem;
  font-size: 1rem;
  line-height: 1.6rem;
`
