import styled from 'styled-components'

import { device } from '../../../styles/devices'

export const Container = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;

  > a {
    display: none;
  }
  > button {
    margin-right: 0;
  }

  @media ${device.mobileLToUp} {
    > a {
      display: block;
    }
    > button,
    > a {
      margin-right: 1.5rem;
    }
  }
`
