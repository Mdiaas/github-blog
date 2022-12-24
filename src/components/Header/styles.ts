import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  background-image: linear-gradient(
    ${(props) => props.theme['blue-600']},
    ${(props) => props.theme['blue-400']}
  );
  height: 18.44rem;
  display: flex;
  justify-content: center;

  img {
    width: 9.25rem;
    margin-top: 4rem;
    height: 6.125rem;
  }
`
