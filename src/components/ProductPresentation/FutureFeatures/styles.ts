import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2rem;
    padding: 2.5rem 0;
  }

  > p {
    font-weight: 400;
    line-height: 1.75rem;
    max-width: 790px;
    text-align: center;
  }

  > img {
    max-height: 96px;
  }
`
