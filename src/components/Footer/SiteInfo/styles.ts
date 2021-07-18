import styled from 'styled-components'
import { device } from '../../../styles/devices'

export const Container = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tabletPortraitToUp} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${device.laptopToUp} {
    max-width: 1180px;
    padding: 4rem 0;
  }
`
