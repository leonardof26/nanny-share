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
  }

  > p {
    padding: 2.5rem 0;
    font-weight: 400;
    line-height: 1.75rem;
    text-align: center;
    max-width: 790px;
  }

  > a {
    padding-bottom: 3.5rem;
  }

  > img {
    max-height: 392px;
  }
`
