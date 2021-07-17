import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  img {
    max-height: 336px;
  }
`

export const Info = styled.div`
  max-width: 45%;

  > h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2rem;
  }

  > p {
    padding: 2.5rem 0;
    font-weight: 400;
    line-height: 1.75rem;
  }
`
