import styled from 'styled-components'

export const CardContainer = styled.a`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme['blue-500']};
  border-radius: 10px;
  overflow: hidden;
  text-overflow: '…';
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    h3 {
      color: ${(props) => props.theme['gray-100']};
      font-size: 1.25rem;
      flex: 1;
    }
    span {
      font-size: 0.875rem;
    }
  }
  p {
    margin-top: 1.25rem;
    line-height: 1.6rem;
  }

  padding: 2rem;
`
