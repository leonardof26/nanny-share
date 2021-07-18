import styled from 'styled-components'

interface LinkProps {
  color: 'white' | 'grey'
}

const colors = {
  white: 'var(--white)',
  grey: 'var(--text-color)',
}

export const Container = styled.a<LinkProps>`
  color: ${(props) => colors[props.color]};
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
