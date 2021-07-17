import styled from 'styled-components'

export const Container = styled.div`
  min-height: 60vh;
`

export const Background = styled.img`
  width: 100%;

  object-fit: cover;
  background: var(--purple-gradient);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
