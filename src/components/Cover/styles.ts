import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 70vh;
`

export const Background = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  background: var(--purple-gradient);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
