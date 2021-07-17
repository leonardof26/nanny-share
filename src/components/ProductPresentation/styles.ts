import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1050px;
  margin: auto;

  > div {
    padding: 5rem 0;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      left: 12.5%;
      bottom: 0;
      height: 1px;
      width: 75%;
      border-bottom: 2px solid var(--gray);
    }
  }
`
