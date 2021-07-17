import styled from 'styled-components'

interface ExternalLinkProps {
  color: 'purple' | 'white'
}

const color = {
  purple: 'var(--purple)',
  white: 'var(--white)',
}

export const Container = styled.a<ExternalLinkProps>`
  color: ${(props) => color[props.color]};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`
