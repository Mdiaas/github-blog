import styled from 'styled-components'

export const FormSearchContainer = styled.form`
  margin-top: 4.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
    h2 {
      font-weight: bold;
      font-size: 1.125rem;
    }
  }
  input {
    width: 100%;
    padding: 0.75rem 1rem;
    background-color: #040f1a;
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme['blue-100']};
    &::placeholder {
      color: ${(props) => props.theme['blue-300']};
    }
  }
`
