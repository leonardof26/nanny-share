import styled from 'styled-components'
import { device } from '../../styles/devices'

export const Container = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${device.mobileSToUp} {
    padding-left: 0;
    padding-right: 0;
  }
`
