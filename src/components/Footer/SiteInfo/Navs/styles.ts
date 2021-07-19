import styled from 'styled-components'

import { device } from '../../../../styles/devices'

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  max-width: 80%;
  flex-wrap: wrap;

  a + a {
    margin-left: 2rem;
  }

  a {
    padding: 1rem 0;
  }

  @media ${device.mobileSToUp} {
    max-width: 70%;
  }

  @media ${device.mobileMToUp} {
    max-width: 60%;
  }

  @media ${device.mobileLToUp} {
    max-width: 100%;
    flex-wrap: no-wrap;

    a {
      padding: 0;
    }
  }

  @media ${device.tabletPortraitToUp} {
    padding: 0;
    width: 100%;
  }
`
