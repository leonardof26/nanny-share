import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    max-height: 392px;
  }
`

export const Info = styled.div`
  max-width: 43%;

  > h1 {
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 2rem;
  }

  > p {
    padding: 1.5rem 0;
    font-weight: 500;
    line-height: 1.5rem;
  }
`
