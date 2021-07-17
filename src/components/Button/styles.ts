import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`

interface ContainerProps extends React.HTMLProps<HTMLButtonElement> {
  loading?: boolean
}

export const Container = styled.button<ContainerProps>`
  padding: 0 1.5rem;
  height: 3rem;
  border: 0;
  border-radius: 4px;
  background: var(--green);

  font-weight: 0.825rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: var(--white);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    animation: ${(props) =>
      props.loading
        ? css`
            ${rotate} 2s linear infinite
          `
        : 'none'};
  }
`
