import styled from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  height: 13.25rem;
  display: flex;
  align-items: flex-start;
  padding: 2rem 2.5rem;
  justify-content: center;
  background: ${(props) => props.theme['blue-600']};
  border-radius: 10px;
  margin-top: -5.4375rem;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
  }
`

export const Avatar = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
  background-color: black;
  margin-right: 2rem;
`

export const InfoContainer = styled.div`
  flex: 1;
  h2 {
    color: ${(props) => props.theme['gray-100']};
  }
  p {
    color: ${(props) => props.theme['blue-100']};
  }
  footer {
    margin-top: 1.5rem;
    color: ${(props) => props.theme['gray-300']};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`
