import styled from 'styled-components'

export const Container = styled.a`
  color: var(--white);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.825rem;

  & + a {
    margin-left: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`
