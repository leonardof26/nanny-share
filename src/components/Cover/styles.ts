import styled from 'styled-components'

import { device } from '../../styles/devices'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  height: 60vh;
  width: 100%;

  @media ${device.mobileLToUp} {
    min-height: 70vh;
    height: auto;
  }
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
