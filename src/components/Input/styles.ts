import styled from 'styled-components'

interface InputProps {
  error?: boolean
}

export const Container = styled.input<InputProps>`
  height: 3rem;
  border: 1px solid;
  border-color: ${(props) => (props.error ? 'var(--red)' : 'var(--gray)')};

  font-weight: 400;
  line-height: 1.25;
  font-size: 0.825rem;

  border-radius: 0.25rem;
  padding: 0.25rem;

  transition: filter 0.2s;

  :focus {
    border-color: ${(props) => (props.error ? 'var(--red)' : 'var(--blue)')};
  }

  :hover {
    filter: brightness(0.98);
  }
`
