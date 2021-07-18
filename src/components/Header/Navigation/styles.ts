import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  margin-left: 2rem;

  display: none;
  align-items: center;
  justify-content: space-between;

  @media ${device.tabletPortrait} {
    display: flex;
  }
`
