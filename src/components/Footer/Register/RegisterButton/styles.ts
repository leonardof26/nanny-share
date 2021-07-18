import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--purple);
  color: var(--white);
  border: 0;
  border-radius: 4px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`

export const Info = styled.div`
  margin-left: 1.5rem;

  > h1 {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.125rem;
  }

  > p {
    font-size: 0.875rem;
    line-height: 1rem;
  }
`
